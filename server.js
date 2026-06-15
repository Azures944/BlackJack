const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: '*' },
  pingTimeout: 30000,
  pingInterval: 10000
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// ─── CREATURE DEFINITIONS ────────────────────────────────────────────────────
const CREATURE_DEFS = [
  {
    id: 'luminos', name: 'Luminos', title: 'Star Guardian',
    type: 'light', rarity: 'legendary',
    baseHp: 150, baseAtk: 95, baseDef: 85, baseSpd: 100,
    catchRate: 0.05, xpReward: 500, spawnWeight: 1,
    colors: { primary: '#FFD700', secondary: '#FFF9C4', glow: '#FFEB3B', bg: '#FFF8E1' },
    abilities: [
      { name: 'Solar Flare', power: 45, type: 'light', pp: 15 },
      { name: 'Star Fall',   power: 65, type: 'light', pp: 10 },
      { name: 'Radiance',    power: 30, type: 'light', pp: 20, heal: 20 },
      { name: 'Nova Burst',  power: 90, type: 'light', pp: 5 }
    ]
  },
  {
    id: 'pyradon', name: 'Pyradon', title: 'Flame Drake',
    type: 'fire', rarity: 'rare',
    baseHp: 120, baseAtk: 110, baseDef: 65, baseSpd: 90,
    catchRate: 0.1, xpReward: 300, spawnWeight: 5,
    colors: { primary: '#FF4500', secondary: '#FF8C00', glow: '#FF6B35', bg: '#FBE9E7' },
    abilities: [
      { name: 'Ember Bite',    power: 40, type: 'fire', pp: 20 },
      { name: 'Dragon Flame',  power: 70, type: 'fire', pp: 10 },
      { name: 'Scale Armor',   power: 0,  type: 'fire', pp: 15, selfBuff: 'def' },
      { name: 'Inferno',       power: 100, type: 'fire', pp: 5 }
    ]
  },
  {
    id: 'aqualis', name: 'Aqualis', title: 'Tide Serpent',
    type: 'water', rarity: 'uncommon',
    baseHp: 130, baseAtk: 75, baseDef: 90, baseSpd: 85,
    catchRate: 0.15, xpReward: 200, spawnWeight: 8,
    colors: { primary: '#0288D1', secondary: '#4FC3F7', glow: '#29B6F6', bg: '#E1F5FE' },
    abilities: [
      { name: 'Water Jet',    power: 35, type: 'water', pp: 25 },
      { name: 'Tidal Wave',   power: 75, type: 'water', pp: 10 },
      { name: 'Bubble Shield',power: 0,  type: 'water', pp: 20, selfBuff: 'def' },
      { name: 'Whirlpool',    power: 85, type: 'water', pp: 5 }
    ]
  },
  {
    id: 'sylvara', name: 'Sylvara', title: 'Forest Fairy',
    type: 'nature', rarity: 'uncommon',
    baseHp: 110, baseAtk: 80, baseDef: 80, baseSpd: 95,
    catchRate: 0.15, xpReward: 200, spawnWeight: 8,
    colors: { primary: '#2E7D32', secondary: '#A5D6A7', glow: '#66BB6A', bg: '#E8F5E9' },
    abilities: [
      { name: 'Leaf Blade',    power: 40, type: 'nature', pp: 20 },
      { name: 'Petal Storm',   power: 65, type: 'nature', pp: 12 },
      { name: 'Heal Bloom',    power: 0,  type: 'nature', pp: 15, heal: 30 },
      { name: "Nature's Wrath",power: 90, type: 'nature', pp: 5 }
    ]
  },
  {
    id: 'voltex', name: 'Voltex', title: 'Thunder Wolf',
    type: 'electric', rarity: 'rare',
    baseHp: 100, baseAtk: 105, baseDef: 70, baseSpd: 115,
    catchRate: 0.1, xpReward: 300, spawnWeight: 5,
    colors: { primary: '#F9A825', secondary: '#FFF176', glow: '#FFEE58', bg: '#FFFDE7' },
    abilities: [
      { name: 'Shock Fang',    power: 40, type: 'electric', pp: 20 },
      { name: 'Thunder Strike',power: 75, type: 'electric', pp: 12 },
      { name: 'Static Aura',   power: 0,  type: 'electric', pp: 15, selfBuff: 'spd' },
      { name: 'Thunderclap',   power: 95, type: 'electric', pp: 5 }
    ]
  },
  {
    id: 'shadowfang', name: 'Shadowfang', title: 'Void Phantom',
    type: 'dark', rarity: 'rare',
    baseHp: 115, baseAtk: 100, baseDef: 75, baseSpd: 105,
    catchRate: 0.1, xpReward: 300, spawnWeight: 5,
    colors: { primary: '#6A1B9A', secondary: '#CE93D8', glow: '#AB47BC', bg: '#F3E5F5' },
    abilities: [
      { name: 'Shadow Claw',   power: 45, type: 'dark', pp: 20 },
      { name: 'Void Strike',   power: 70, type: 'dark', pp: 12 },
      { name: 'Phantom Veil',  power: 0,  type: 'dark', pp: 15, selfBuff: 'def' },
      { name: 'Darkness Surge',power: 95, type: 'dark', pp: 5 }
    ]
  },
  {
    id: 'frostelle', name: 'Frostelle', title: 'Crystal Angel',
    type: 'ice', rarity: 'uncommon',
    baseHp: 105, baseAtk: 85, baseDef: 95, baseSpd: 80,
    catchRate: 0.15, xpReward: 200, spawnWeight: 8,
    colors: { primary: '#0097A7', secondary: '#B2EBF2', glow: '#00BCD4', bg: '#E0F7FA' },
    abilities: [
      { name: 'Ice Shard',    power: 35,  type: 'ice', pp: 25 },
      { name: 'Blizzard',     power: 70,  type: 'ice', pp: 10 },
      { name: 'Ice Armor',    power: 0,   type: 'ice', pp: 20, selfBuff: 'def' },
      { name: 'Absolute Zero',power: 100, type: 'ice', pp: 5 }
    ]
  },
  {
    id: 'terrarok', name: 'Terrarok', title: 'Stone Golem',
    type: 'earth', rarity: 'common',
    baseHp: 160, baseAtk: 70, baseDef: 120, baseSpd: 45,
    catchRate: 0.25, xpReward: 100, spawnWeight: 15,
    colors: { primary: '#5D4037', secondary: '#A1887F', glow: '#8D6E63', bg: '#EFEBE9' },
    abilities: [
      { name: 'Rock Smash',   power: 40, type: 'earth', pp: 20 },
      { name: 'Seismic Slam', power: 70, type: 'earth', pp: 12 },
      { name: 'Earth Wall',   power: 0,  type: 'earth', pp: 15, selfBuff: 'def' },
      { name: 'Earthquake',   power: 90, type: 'earth', pp: 5 }
    ]
  }
];

// ─── GAME STATE ───────────────────────────────────────────────────────────────
const worldCreatures = new Map();
const players = new Map();
const activeBattles = new Map();

function weightedRandom(defs) {
  const total = defs.reduce((s, d) => s + d.spawnWeight, 0);
  let r = Math.random() * total;
  for (const d of defs) {
    r -= d.spawnWeight;
    if (r <= 0) return d;
  }
  return defs[defs.length - 1];
}

function spawnCreatureNear(lat, lng) {
  const def = weightedRandom(CREATURE_DEFS);
  const id = uuidv4();
  const creature = {
    id,
    defId: def.id,
    lat: lat + (Math.random() - 0.5) * 0.009,
    lng: lng + (Math.random() - 0.5) * 0.012,
    level: Math.floor(Math.random() * 15) + 1,
    expiresAt: Date.now() + 5 * 60 * 1000
  };
  worldCreatures.set(id, creature);
  return creature;
}

function initWorldCreatures() {
  const hotspots = [
    [40.7128, -74.006], [51.5074, -0.1278], [48.8566, 2.3522],
    [35.6762, 139.650], [-33.868, 151.209], [19.432, -99.133],
    [55.755, 37.617],   [-23.55, -46.633],  [1.3521, 103.819],
    [28.613, 77.209],   [37.774, -122.41],  [41.878, -87.629]
  ];
  for (const [lat, lng] of hotspots) {
    for (let i = 0; i < 6; i++) spawnCreatureNear(lat, lng);
  }
}
initWorldCreatures();

setInterval(() => {
  const now = Date.now();
  for (const [id, c] of worldCreatures) {
    if (c.expiresAt < now) worldCreatures.delete(id);
  }
}, 60 * 1000);

function getNearby(lat, lng, radius = 0.018) {
  const result = [];
  for (const c of worldCreatures.values()) {
    const d = Math.hypot(c.lat - lat, c.lng - lng);
    if (d <= radius) result.push(c);
  }
  return result;
}

function calcDamage(atk, def, power, level) {
  const base = ((2 * level / 5 + 2) * power * atk / def) / 50 + 2;
  return Math.max(1, Math.floor(base * (0.85 + Math.random() * 0.15)));
}

function ensureActiveCreature(player) {
  if (player.activeCreature) return;
  if (player.collection.length > 0) {
    const caught = player.collection[0];
    const def = CREATURE_DEFS.find(d => d.id === caught.defId);
    const maxHp = Math.floor(def.baseHp * (1 + caught.level * 0.1));
    player.activeCreature = { def, level: caught.level, currentHp: maxHp, maxHp };
  } else {
    const def = CREATURE_DEFS.find(d => d.id === 'terrarok');
    const maxHp = Math.floor(def.baseHp * 1.5);
    player.activeCreature = { def, level: 5, currentHp: maxHp, maxHp };
  }
}

// ─── SOCKET.IO ────────────────────────────────────────────────────────────────
io.on('connection', (socket) => {
  socket.on('join', ({ username, lat, lng }) => {
    const player = {
      id: socket.id,
      username: (username || 'Trainer').slice(0, 20),
      lat: lat || 0, lng: lng || 0,
      level: 1, xp: 0, coins: 500,
      collection: [], activeCreature: null,
      joinedAt: Date.now()
    };
    players.set(socket.id, player);

    for (let i = 0; i < 10; i++) spawnCreatureNear(player.lat, player.lng);
    const nearby = getNearby(player.lat, player.lng);

    socket.emit('joined', { player, nearbyCreatures: nearby, creatureDefs: CREATURE_DEFS });

    const others = [];
    for (const [id, p] of players) {
      if (id !== socket.id) others.push({ id, username: p.username, lat: p.lat, lng: p.lng, level: p.level });
    }
    socket.emit('existingPlayers', others);
    socket.broadcast.emit('playerJoined', { id: socket.id, username: player.username, lat: player.lat, lng: player.lng, level: player.level });
  });

  socket.on('move', ({ lat, lng }) => {
    const p = players.get(socket.id);
    if (!p) return;
    p.lat = lat; p.lng = lng;
    if (Math.random() < 0.4) {
      spawnCreatureNear(lat, lng);
      socket.emit('creaturesUpdate', getNearby(lat, lng));
    }
    socket.broadcast.emit('playerMoved', { id: socket.id, lat, lng });
  });

  socket.on('getCreatures', ({ lat, lng }) => {
    socket.emit('creaturesUpdate', getNearby(lat, lng));
  });

  socket.on('encounter', ({ creatureId }) => {
    const c = worldCreatures.get(creatureId);
    if (!c) { socket.emit('encounterError', 'This creature has fled!'); return; }
    const def = CREATURE_DEFS.find(d => d.id === c.defId);
    socket.emit('encounterStart', { creature: c, def });
  });

  socket.on('startBattle', ({ creatureId }) => {
    const player = players.get(socket.id);
    const wild = worldCreatures.get(creatureId);
    if (!player || !wild) { socket.emit('battleError', 'Cannot start battle'); return; }

    ensureActiveCreature(player);
    const wildDef = CREATURE_DEFS.find(d => d.id === wild.defId);
    const wildMaxHp = Math.floor(wildDef.baseHp * (1 + wild.level * 0.1));

    const battle = {
      id: uuidv4(),
      playerId: socket.id,
      wildCreatureId: creatureId,
      wildDef, wildLevel: wild.level,
      wildCurrentHp: wildMaxHp, wildMaxHp,
      playerDef: player.activeCreature.def,
      playerLevel: player.activeCreature.level,
      playerCurrentHp: player.activeCreature.currentHp,
      playerMaxHp: player.activeCreature.maxHp,
      turn: 'player', log: []
    };
    activeBattles.set(battle.id, battle);
    socket.emit('battleStarted', battle);
  });

  socket.on('battleAttack', ({ battleId, abilityIndex }) => {
    const b = activeBattles.get(battleId);
    if (!b || b.playerId !== socket.id || b.turn !== 'player') return;

    const ability = b.playerDef.abilities[abilityIndex];
    if (!ability) return;

    let dmg = 0, heal = 0;
    if (ability.power > 0) {
      dmg = calcDamage(b.playerDef.baseAtk, b.wildDef.baseDef, ability.power, b.playerLevel);
      b.wildCurrentHp = Math.max(0, b.wildCurrentHp - dmg);
    }
    if (ability.heal) {
      heal = ability.heal;
      b.playerCurrentHp = Math.min(b.playerMaxHp, b.playerCurrentHp + heal);
    }
    b.log.push({ type: 'playerAttack', ability: ability.name, damage: dmg, heal });

    if (b.wildCurrentHp <= 0) { resolveBattle(socket, b, 'playerWon'); return; }

    b.turn = 'wild';
    socket.emit('battleUpdate', { battle: b, latestLog: b.log.slice(-1) });

    setTimeout(() => {
      if (!activeBattles.has(b.id)) return;
      const wa = b.wildDef.abilities[Math.floor(Math.random() * b.wildDef.abilities.length)];
      let wdmg = 0;
      if (wa.power > 0) {
        wdmg = calcDamage(b.wildDef.baseAtk, b.playerDef.baseDef, wa.power, b.wildLevel);
        b.playerCurrentHp = Math.max(0, b.playerCurrentHp - wdmg);
      }
      b.log.push({ type: 'wildAttack', ability: wa.name, damage: wdmg });
      if (b.playerCurrentHp <= 0) { resolveBattle(socket, b, 'wildWon'); return; }
      b.turn = 'player';
      socket.emit('battleUpdate', { battle: b, latestLog: b.log.slice(-1) });
    }, 1200);
  });

  socket.on('battleCatch', ({ battleId }) => {
    const b = activeBattles.get(battleId);
    if (!b || b.playerId !== socket.id) return;
    const player = players.get(socket.id);
    if (!player) return;

    const hpRatio = b.wildCurrentHp / b.wildMaxHp;
    const catchChance = b.wildDef.catchRate * (2 - hpRatio);
    if (Math.random() < catchChance) {
      const caught = { id: uuidv4(), defId: b.wildDef.id, level: b.wildLevel, caughtAt: Date.now() };
      player.collection.push(caught);
      worldCreatures.delete(b.wildCreatureId);
      const xpGained = b.wildDef.xpReward;
      player.xp += xpGained;
      const newLevel = Math.floor(1 + Math.sqrt(player.xp / 100));
      if (newLevel > player.level) player.level = newLevel;
      socket.broadcast.emit('creatureGone', { creatureId: b.wildCreatureId });
      resolveBattle(socket, b, 'caught', { caught, xpGained, playerLevel: player.level });
    } else {
      b.log.push({ type: 'catchFailed', message: `${b.wildDef.name} broke free!` });
      socket.emit('catchFailed', { battle: b, log: b.log.slice(-1) });
    }
  });

  socket.on('battleRun', ({ battleId }) => {
    activeBattles.delete(battleId);
    socket.emit('battleEnded', { result: 'fled' });
  });

  socket.on('disconnect', () => {
    players.delete(socket.id);
    socket.broadcast.emit('playerLeft', { id: socket.id });
  });
});

function resolveBattle(socket, battle, result, extra = {}) {
  activeBattles.delete(battle.id);
  if (result === 'playerWon') {
    const player = players.get(battle.playerId);
    if (player) {
      player.xp += Math.floor(battle.wildDef.xpReward * 0.5);
      player.level = Math.max(player.level, Math.floor(1 + Math.sqrt(player.xp / 100)));
    }
  }
  socket.emit('battleEnded', { result, battle, ...extra });
}

app.get('/health', (_, res) => res.json({ status: 'ok', players: players.size, creatures: worldCreatures.size }));
app.get('/api/defs', (_, res) => res.json(CREATURE_DEFS));

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => console.log(`NexaHunters running on port ${PORT}`));
