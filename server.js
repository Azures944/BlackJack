<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1"/>
<title>Royal Blackjack</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="/css/style.css"/>
</head>
<body>

<!-- LOBBY -->
<div id="screen-lobby" class="screen active">
  <div class="lobby-felt"></div>
  <div class="lobby-vignette"></div>
  <div class="lobby-wrap">
    <header class="casino-header">
      <div class="header-line"></div>
      <h1 class="casino-title">ROYAL BLACKJACK</h1>
      <div class="header-suits">♠ ♥ ♦ ♣</div>
      <div class="header-line"></div>
    </header>

    <div class="lobby-card">
      <div class="lobby-fields">
        <label>Your Name</label>
        <input id="inp-name" type="text" placeholder="Enter name..." maxlength="16"/>
        <label style="margin-top:16px">Choose Avatar</label>
        <div class="avatar-grid" id="avatar-grid"></div>
      </div>

      <div class="lobby-actions">
        <button class="btn-casino btn-gold" id="btn-create">Create Table</button>
        <div class="divider"><span>or join existing</span></div>
        <div class="join-row">
          <input id="inp-code" type="text" placeholder="Table code..." maxlength="5" style="text-transform:uppercase;letter-spacing:4px;text-align:center;font-size:18px"/>
          <button class="btn-casino btn-green" id="btn-join">Join →</button>
        </div>
      </div>
    </div>

    <div class="lobby-card hidden" id="waiting-card">
      <div class="table-code-display">
        <span class="code-label">Table Code</span>
        <span class="code-value" id="code-display">—</span>
        <button class="copy-btn" id="btn-copy">Copy</button>
      </div>
      <p class="code-hint">Share with friends to join your table</p>
      <div id="lobby-players"></div>
      <button class="btn-casino btn-gold hidden" id="btn-start">Deal Cards →</button>
      <p class="host-hint" id="host-hint">Waiting for host to start...</p>
    </div>
  </div>
</div>

<!-- GAME TABLE -->
<div id="screen-game" class="screen hidden">
  <div class="table-felt"></div>
  <div class="table-vignette"></div>

  <div id="game-wrap">
    <!-- TOP BAR -->
    <div id="top-bar">
      <div class="tb-left">
        <span class="table-id-badge" id="tb-code"></span>
      </div>
      <div class="tb-center">
        <span id="phase-label"></span>
      </div>
      <div class="tb-right" id="tb-timer"></div>
    </div>

    <!-- DEALER AREA -->
    <div id="dealer-zone">
      <div class="dealer-label">D E A L E R</div>
      <div id="dealer-cards" class="card-row"></div>
      <div id="dealer-value" class="hand-value"></div>
    </div>

    <!-- PLAYERS AREA -->
    <div id="players-zone"></div>

    <!-- ACTION BAR -->
    <div id="action-bar">
      <div id="bet-zone" class="hidden">
        <div class="chip-row" id="chip-row"></div>
        <div class="bet-display">
          Bet: <span id="bet-amount">$0</span>
          <button class="btn-sm btn-gray" id="btn-clear-bet">✕ Clear</button>
        </div>
        <button class="btn-casino btn-gold" id="btn-place-bet">Place Bet</button>
      </div>
      <div id="play-zone" class="hidden">
        <button class="btn-casino btn-green" id="btn-hit">Hit</button>
        <button class="btn-casino btn-red" id="btn-stand">Stand</button>
        <button class="btn-casino btn-gold" id="btn-double" style="display:none">Double</button>
        <button class="btn-casino btn-blue" id="btn-split" style="display:none">Split</button>
        <button class="btn-casino btn-gray" id="btn-surrender" style="display:none">Surrender</button>
      </div>
      <div id="insurance-zone" class="hidden">
        <p class="ins-label">Take Insurance? (pays 2:1)</p>
        <div class="ins-row">
          <input type="number" id="ins-amount" placeholder="Amount..." min="1"/>
          <button class="btn-casino btn-gold btn-sm" id="btn-insurance">Take</button>
          <button class="btn-casino btn-gray btn-sm" id="btn-no-insurance">Skip</button>
        </div>
      </div>
      <div id="waiting-zone" class="hidden">
        <p id="waiting-text"></p>
      </div>
      <div id="host-deal-zone" class="hidden">
        <button class="btn-casino btn-gold" id="btn-deal-now">Deal Now →</button>
      </div>
    </div>

    <!-- LOG -->
    <div id="log-panel">
      <div id="log-entries"></div>
    </div>
  </div>
</div>

<!-- MODAL -->
<div id="modal" class="hidden">
  <div id="modal-inner">
    <div id="modal-msg"></div>
    <button class="btn-casino btn-gray" onclick="document.getElementById('modal').classList.add('hidden')">OK</button>
  </div>
</div>

<script src="/socket.io/socket.io.js"></script>
<script src="/js/client.js"></script>
</body>
</html>
