# Royal Blackjack 🃏

Multiplayer Blackjack built with Node.js + Socket.io. Play with friends on any device!

## Rules (Vegas Strip)
- 6 decks, shuffled at 75% penetration
- Dealer stands on ALL 17s (including soft 17)
- Blackjack pays 3:2
- Double down on any first two cards
- Split up to 3 times (4 hands max)
- No double after split aces (one card each)
- Insurance when dealer shows Ace (pays 2:1)
- Surrender on first two cards (get half bet back)
- Up to 7 players per table

## Deploy to Railway

1. Push this folder to a GitHub repo
2. Go to [railway.app](https://railway.app) → New Project → Deploy from GitHub
3. Select your repo — auto-detected as Node.js
4. Get your public URL and share it!

## Run Locally

```bash
npm install
npm start
# Visit http://localhost:3000
```

## How to Play

1. Host creates a table, shares the 5-letter code
2. Friends join with the code
3. Everyone places bets, host clicks **Deal Now**
4. Take turns: Hit, Stand, Double, Split, or Surrender
5. Dealer plays last — closest to 21 wins!
