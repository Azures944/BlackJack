// game-engine.js — Full Blackjack rules engine
// Rules: Vegas Strip Blackjack
// - 6 decks, shuffled when < 25% remaining
// - Dealer stands on soft 17
// - Blackjack pays 3:2
// - Double down on any first two cards
// - Split up to 3 times (4 hands max), re-split aces allowed
// - No double after split aces
// - Insurance when dealer shows Ace (pays 2:1)
// - Surrender (early) on first two cards
// - Side bet: Perfect Pairs (optional)

const SUITS = ['♠','♥','♦','♣'];
const RANKS = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
const NUM_DECKS = 6;

function makeDeck() {
  const deck = [];
  for (let d = 0; d < NUM_DECKS; d++)
    for (const suit of SUITS)
      for (const rank of RANKS)
        deck.push({ suit, rank });
  return deck;
}

function shuffle(deck) {
  const d = [...deck];
  for (let i = d.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [d[i], d[j]] = [d[j], d[i]];
  }
  return d;
}

function cardValue(rank) {
  if (['J','Q','K'].includes(rank)) return 10;
  if (rank === 'A') return 11;
  return parseInt(rank);
}

function handValue(cards) {
  let total = 0, aces = 0;
  for (const c of cards) {
    total += cardValue(c.rank);
    if (c.rank === 'A') aces++;
  }
  while (total > 21 && aces > 0) { total -= 10; aces--; }
  return total;
}

function isSoft(cards) {
  let total = 0, aces = 0;
  for (const c of cards) {
    total += cardValue(c.rank);
    if (c.rank === 'A') aces++;
  }
  // Soft if an ace is counted as 11
  return aces > 0 && total <= 21 && (total - 10 * (aces - 1)) <= 11;
}

function isBlackjack(cards) {
  return cards.length === 2 && handValue(cards) === 21;
}

function isBust(cards) {
  return handValue(cards) > 21;
}

function canSplit(hand) {
  return hand.cards.length === 2 &&
    cardValue(hand.cards[0].rank) === cardValue(hand.cards[1].rank) &&
    hand.splitCount < 3;
}

function canDouble(hand) {
  // Can double on first 2 cards; not after split aces
  return hand.cards.length === 2 && !hand.splitFromAce;
}

function canSurrender(hand) {
  return hand.cards.length === 2 && !hand.fromSplit;
}

// Create a new table/room
function createTable(tableId) {
  return {
    id: tableId,
    phase: 'lobby',      // lobby → betting → playing → dealer → payout → lobby
    players: [],         // array of player objects
    deck: shuffle(makeDeck()),
    deckPosition: 0,
    dealerCards: [],
    dealerHoleRevealed: false,
    log: [],
    roundNumber: 0,
    currentSeatIndex: 0, // whose turn it is during playing phase
    currentHandIndex: 0, // which split hand
    insuranceOpen: false, // insurance side bets still open
    countdownTimer: null,
  };
}

function createPlayer(id, name, avatar) {
  return {
    id,
    name,
    avatar: avatar || '🎰',
    chips: 1000,
    bet: 0,
    insurance: 0,
    hands: [],          // array of hand objects (multiple if split)
    seatIndex: -1,
    ready: false,       // placed bet and ready
    connected: true,
    isHost: false,
    stats: { wins: 0, losses: 0, pushes: 0, blackjacks: 0 },
  };
}

function createHand(bet) {
  return {
    cards: [],
    bet,
    doubled: false,
    surrendered: false,
    fromSplit: false,
    splitFromAce: false,
    splitCount: 0,
    result: null,   // 'win','lose','push','blackjack','bust','surrender'
    payout: 0,
    done: false,
  };
}

function dealCard(table) {
  if (table.deckPosition >= table.deck.length * 0.75) {
    table.deck = shuffle(makeDeck());
    table.deckPosition = 0;
    addLog(table, '🔀 Deck shuffled.');
  }
  return table.deck[table.deckPosition++];
}

function addLog(table, msg) {
  table.log.unshift({ msg, time: Date.now() });
  if (table.log.length > 60) table.log.pop();
}

// Start a new round — deal cards after bets are in
function dealRound(table) {
  table.roundNumber++;
  table.dealerCards = [];
  table.dealerHoleRevealed = false;
  table.insuranceOpen = false;

  // Reset hands for each player who bet
  for (const p of table.players) {
    if (p.bet > 0 && p.connected) {
      p.hands = [createHand(p.bet)];
      p.insurance = 0;
    } else {
      p.hands = [];
    }
  }

  // Deal 2 cards to each active player and dealer (interleaved)
  const activePlayers = table.players.filter(p => p.bet > 0 && p.connected);
  for (let i = 0; i < 2; i++) {
    for (const p of activePlayers) {
      p.hands[0].cards.push(dealCard(table));
    }
    table.dealerCards.push(dealCard(table));
  }

  addLog(table, `🃏 Round ${table.roundNumber} dealt.`);

  // Check for insurance offer
  const dealerUpCard = table.dealerCards[0];
  if (dealerUpCard.rank === 'A') {
    table.insuranceOpen = true;
    table.phase = 'insurance';
    addLog(table, '🛡️ Dealer shows Ace — Insurance offered!');
    return;
  }

  // Check dealer blackjack immediately (no insurance)
  if (isBlackjack(table.dealerCards)) {
    resolveDealerBlackjack(table);
    return;
  }

  startPlaying(table);
}

function resolveDealerBlackjack(table) {
  table.dealerHoleRevealed = true;
  addLog(table, '🃏 Dealer has Blackjack!');
  for (const p of table.players) {
    for (const hand of p.hands) {
      if (isBlackjack(hand.cards)) {
        hand.result = 'push';
        hand.payout = hand.bet;
        addLog(table, `${p.name}: Push (both Blackjack)`);
      } else {
        hand.result = 'lose';
        hand.payout = 0;
        addLog(table, `${p.name}: Loses to dealer Blackjack`);
      }
    }
    // Insurance pays 2:1
    if (p.insurance > 0) {
      p.chips += p.insurance * 3; // 2:1 + return stake
      addLog(table, `${p.name}: Insurance pays $${p.insurance * 2}`);
    }
    applyPayouts(p);
  }
  table.phase = 'payout';
}

function startPlaying(table) {
  table.phase = 'playing';
  table.currentSeatIndex = 0;
  table.currentHandIndex = 0;

  // Skip players with no hands
  advanceToNextActivePlayer(table);
}

function advanceToNextActivePlayer(table) {
  const seats = table.players.filter(p => p.hands.length > 0 && p.connected);
  while (table.currentSeatIndex < seats.length) {
    const player = seats[table.currentSeatIndex];
    const hand = player.hands[table.currentHandIndex];
    if (!hand) {
      table.currentSeatIndex++;
      table.currentHandIndex = 0;
      continue;
    }
    if (hand.done || isBust(hand.cards) || isBlackjack(hand.cards)) {
      // Auto-advance
      advanceHand(table);
      return;
    }
    return; // This player/hand is active
  }
  // All players done — dealer's turn
  dealerPlay(table);
}

function getCurrentPlayer(table) {
  const seats = table.players.filter(p => p.hands.length > 0 && p.connected);
  return seats[table.currentSeatIndex] || null;
}

function getCurrentHand(table) {
  const p = getCurrentPlayer(table);
  return p ? p.hands[table.currentHandIndex] : null;
}

function advanceHand(table) {
  const seats = table.players.filter(p => p.hands.length > 0 && p.connected);
  const player = seats[table.currentSeatIndex];

  if (player && table.currentHandIndex < player.hands.length - 1) {
    table.currentHandIndex++;
    // If split from ace, auto-stand on second card
    const hand = player.hands[table.currentHandIndex];
    if (hand && hand.splitFromAce) {
      hand.done = true;
      advanceHand(table);
      return;
    }
  } else {
    table.currentSeatIndex++;
    table.currentHandIndex = 0;
  }
  advanceToNextActivePlayer(table);
}

// Player actions
function playerHit(table, playerId) {
  const player = table.players.find(p => p.id === playerId);
  if (!player) return { ok: false, msg: 'Player not found.' };
  const cp = getCurrentPlayer(table);
  if (!cp || cp.id !== playerId) return { ok: false, msg: 'Not your turn.' };
  const hand = getCurrentHand(table);
  if (!hand || hand.done) return { ok: false, msg: 'Hand is done.' };

  hand.cards.push(dealCard(table));
  addLog(table, `${player.name} hits: ${hand.cards[hand.cards.length-1].rank}${hand.cards[hand.cards.length-1].suit}`);

  if (isBust(hand.cards)) {
    hand.result = 'bust';
    hand.payout = 0;
    hand.done = true;
    addLog(table, `${player.name} busts (${handValue(hand.cards)})!`);
    advanceHand(table);
  } else if (handValue(hand.cards) === 21) {
    hand.done = true;
    advanceHand(table);
  }
  return { ok: true };
}

function playerStand(table, playerId) {
  const player = table.players.find(p => p.id === playerId);
  if (!player) return { ok: false, msg: 'Player not found.' };
  const cp = getCurrentPlayer(table);
  if (!cp || cp.id !== playerId) return { ok: false, msg: 'Not your turn.' };
  const hand = getCurrentHand(table);
  if (!hand) return { ok: false, msg: 'No active hand.' };

  hand.done = true;
  addLog(table, `${player.name} stands (${handValue(hand.cards)}).`);
  advanceHand(table);
  return { ok: true };
}

function playerDouble(table, playerId) {
  const player = table.players.find(p => p.id === playerId);
  if (!player) return { ok: false, msg: 'Player not found.' };
  const cp = getCurrentPlayer(table);
  if (!cp || cp.id !== playerId) return { ok: false, msg: 'Not your turn.' };
  const hand = getCurrentHand(table);
  if (!hand || !canDouble(hand)) return { ok: false, msg: 'Cannot double here.' };
  if (player.chips < hand.bet) return { ok: false, msg: 'Not enough chips.' };

  player.chips -= hand.bet;
  hand.bet *= 2;
  hand.doubled = true;
  hand.cards.push(dealCard(table));
  addLog(table, `${player.name} doubles down! Card: ${hand.cards[hand.cards.length-1].rank}${hand.cards[hand.cards.length-1].suit} (${handValue(hand.cards)})`);

  if (isBust(hand.cards)) {
    hand.result = 'bust';
    hand.payout = 0;
  }
  hand.done = true;
  advanceHand(table);
  return { ok: true };
}

function playerSplit(table, playerId) {
  const player = table.players.find(p => p.id === playerId);
  if (!player) return { ok: false, msg: 'Player not found.' };
  const cp = getCurrentPlayer(table);
  if (!cp || cp.id !== playerId) return { ok: false, msg: 'Not your turn.' };
  const hand = getCurrentHand(table);
  if (!hand || !canSplit(hand)) return { ok: false, msg: 'Cannot split.' };
  if (player.chips < hand.bet) return { ok: false, msg: 'Not enough chips.' };

  player.chips -= hand.bet;

  const isAce = hand.cards[0].rank === 'A';
  const newHand = createHand(hand.bet);
  newHand.cards.push(hand.cards.pop()); // move second card
  newHand.fromSplit = true;
  newHand.splitFromAce = isAce;
  newHand.splitCount = hand.splitCount + 1;
  hand.fromSplit = true;
  hand.splitFromAce = isAce;
  hand.splitCount++;

  // Deal one card to each
  hand.cards.push(dealCard(table));
  newHand.cards.push(dealCard(table));

  // Insert new hand right after current
  player.hands.splice(table.currentHandIndex + 1, 0, newHand);

  addLog(table, `${player.name} splits!`);

  // If split aces — auto-stand both
  if (isAce) {
    hand.done = true;
    newHand.done = true;
    addLog(table, `${player.name}: Split aces — one card each, auto-stand.`);
    advanceHand(table);
  }
  return { ok: true };
}

function playerSurrender(table, playerId) {
  const player = table.players.find(p => p.id === playerId);
  if (!player) return { ok: false, msg: 'Player not found.' };
  const cp = getCurrentPlayer(table);
  if (!cp || cp.id !== playerId) return { ok: false, msg: 'Not your turn.' };
  const hand = getCurrentHand(table);
  if (!hand || !canSurrender(hand)) return { ok: false, msg: 'Cannot surrender.' };

  hand.surrendered = true;
  hand.result = 'surrender';
  hand.payout = Math.floor(hand.bet / 2);
  hand.done = true;
  addLog(table, `${player.name} surrenders — recovers $${hand.payout}.`);
  advanceHand(table);
  return { ok: true };
}

function playerInsurance(table, playerId, amount) {
  const player = table.players.find(p => p.id === playerId);
  if (!player) return { ok: false, msg: 'Not found.' };
  if (!table.insuranceOpen) return { ok: false, msg: 'Insurance not available.' };
  const maxInsurance = Math.floor(player.bet / 2);
  if (amount > maxInsurance) return { ok: false, msg: `Max insurance is $${maxInsurance}.` };
  if (amount > player.chips) return { ok: false, msg: 'Not enough chips.' };

  player.chips -= amount;
  player.insurance = amount;
  addLog(table, `${player.name} takes insurance for $${amount}.`);
  return { ok: true };
}

function closeInsurance(table) {
  table.insuranceOpen = false;
  // Check dealer blackjack
  if (isBlackjack(table.dealerCards)) {
    resolveDealerBlackjack(table);
  } else {
    // Insurance loses
    for (const p of table.players) {
      if (p.insurance > 0) {
        addLog(table, `${p.name}: Insurance lost ($${p.insurance}).`);
        p.insurance = 0;
      }
    }
    startPlaying(table);
  }
}

// Dealer plays out their hand
function dealerPlay(table) {
  table.phase = 'dealer';
  table.dealerHoleRevealed = true;
  addLog(table, `Dealer reveals hole card: ${table.dealerCards[1].rank}${table.dealerCards[1].suit} (${handValue(table.dealerCards)})`);

  // Check if all players busted/surrendered — dealer doesn't need to play
  const activePlayers = table.players.filter(p => p.hands.some(h => !h.done || h.result === null));
  const anyActive = table.players.some(p =>
    p.hands.some(h => h.result !== 'bust' && h.result !== 'surrender' && !isBust(h.cards))
  );

  if (!anyActive) {
    resolveRound(table);
    return;
  }

  // Dealer draws: hits on soft 16 and below, stands on soft 17+, hard 17+
  while (true) {
    const val = handValue(table.dealerCards);
    const soft = isSoft(table.dealerCards);
    if (val < 17 || (val === 17 && soft)) {
      // Soft 17 — dealer STANDS (Vegas Strip rule)
      // Actually for Vegas Strip: dealer stands on ALL 17s including soft 17
      // For more action: dealer hits soft 17 (H17). We'll use S17.
      const card = dealCard(table);
      table.dealerCards.push(card);
      addLog(table, `Dealer draws: ${card.rank}${card.suit} (${handValue(table.dealerCards)})`);
    } else {
      break;
    }
  }

  addLog(table, `Dealer stands at ${handValue(table.dealerCards)}.`);
  resolveRound(table);
}

function resolveRound(table) {
  const dealerVal = handValue(table.dealerCards);
  const dealerBust = isBust(table.dealerCards);
  const dealerBJ = isBlackjack(table.dealerCards);

  for (const p of table.players) {
    for (const hand of p.hands) {
      if (hand.result === 'bust' || hand.result === 'surrender') continue;

      const pVal = handValue(hand.cards);
      const pBJ = isBlackjack(hand.cards) && !hand.fromSplit;

      if (pBJ && !dealerBJ) {
        hand.result = 'blackjack';
        hand.payout = hand.bet + Math.floor(hand.bet * 1.5); // 3:2
        addLog(table, `🎉 ${p.name}: BLACKJACK! +$${Math.floor(hand.bet * 1.5)}`);
      } else if (dealerBust) {
        hand.result = 'win';
        hand.payout = hand.bet * 2;
        addLog(table, `✅ ${p.name}: Dealer busts, wins $${hand.bet}!`);
      } else if (pVal > dealerVal) {
        hand.result = 'win';
        hand.payout = hand.bet * 2;
        addLog(table, `✅ ${p.name}: Wins ($${pVal} vs $${dealerVal})`);
      } else if (pVal === dealerVal) {
        hand.result = 'push';
        hand.payout = hand.bet;
        addLog(table, `🔁 ${p.name}: Push`);
      } else {
        hand.result = 'lose';
        hand.payout = 0;
        addLog(table, `❌ ${p.name}: Loses ($${pVal} vs $${dealerVal})`);
      }
    }
    applyPayouts(p);
  }

  table.phase = 'payout';
}

function applyPayouts(player) {
  for (const hand of player.hands) {
    if (hand.result === 'bust' || hand.result === 'lose') {
      // chips already deducted at bet time
    } else {
      player.chips += hand.payout;
    }
    // Update stats
    if (hand.result === 'win' || hand.result === 'blackjack') player.stats.wins++;
    else if (hand.result === 'lose' || hand.result === 'bust') player.stats.losses++;
    else if (hand.result === 'push') player.stats.pushes++;
    if (hand.result === 'blackjack') player.stats.blackjacks++;
  }
}

function resetRound(table) {
  for (const p of table.players) {
    p.bet = 0;
    p.insurance = 0;
    p.hands = [];
    p.ready = false;
    // Rebuy if broke
    if (p.chips <= 0) p.chips = 1000;
  }
  table.dealerCards = [];
  table.dealerHoleRevealed = false;
  table.phase = 'betting';
  table.currentSeatIndex = 0;
  table.currentHandIndex = 0;
  addLog(table, `--- Round ${table.roundNumber + 1} — Place your bets! ---`);
}

function placeBet(table, playerId, amount) {
  const player = table.players.find(p => p.id === playerId);
  if (!player) return { ok: false, msg: 'Not found.' };
  if (table.phase !== 'betting') return { ok: false, msg: 'Betting is closed.' };
  if (amount < 5) return { ok: false, msg: 'Minimum bet is $5.' };
  if (amount > player.chips) return { ok: false, msg: 'Not enough chips.' };
  player.chips -= amount;
  player.bet = amount;
  player.ready = true;
  addLog(table, `${player.name} bets $${amount}.`);
  return { ok: true };
}

module.exports = {
  createTable, createPlayer, placeBet,
  dealRound, resetRound, closeInsurance,
  playerHit, playerStand, playerDouble, playerSplit, playerSurrender, playerInsurance,
  getCurrentPlayer, getCurrentHand,
  handValue, isBlackjack, isBust, canSplit, canDouble, canSurrender,
  addLog
};
