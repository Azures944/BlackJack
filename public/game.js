'use strict';

// ─── CREATURE SVG ART ────────────────────────────────────────────────────────
const CREATURE_SVGS = {
  solaris: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="lg1" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#FFFDE7"/>
      <stop offset="55%" stop-color="#FFD700"/>
      <stop offset="100%" stop-color="#E65100"/>
    </radialGradient>
    <radialGradient id="lg2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFD700" stop-opacity=".35"/>
      <stop offset="100%" stop-color="#FFD700" stop-opacity="0"/>
    </radialGradient>
    <filter id="lglow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="5" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <circle cx="60" cy="60" r="56" fill="url(#lg2)"/>
  <path d="M60,10 L70,44 L106,44 L78,64 L88,98 L60,78 L32,98 L42,64 L14,44 L50,44 Z"
        fill="url(#lg1)" filter="url(#lglow)" stroke="#FFD700" stroke-width=".5"/>
  <path d="M60,22 L67,46 L92,46 L73,60 L80,84 L60,70 L40,84 L47,60 L28,46 L53,46 Z"
        fill="#FFFDE7" opacity=".25"/>
  <ellipse cx="49" cy="57" rx="7" ry="8" fill="#1A237E"/>
  <ellipse cx="71" cy="57" rx="7" ry="8" fill="#1A237E"/>
  <circle cx="46" cy="54" r="3" fill="white"/>
  <circle cx="68" cy="54" r="3" fill="white"/>
  <circle cx="47" cy="55" r="1.2" fill="#4FC3F7"/>
  <circle cx="69" cy="55" r="1.2" fill="#4FC3F7"/>
  <path d="M53,67 Q60,74 67,67" stroke="#9E6A00" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <ellipse cx="42" cy="65" rx="6" ry="3.5" fill="#FFB74D" opacity=".5"/>
  <ellipse cx="78" cy="65" rx="6" ry="3.5" fill="#FFB74D" opacity=".5"/>
  <g fill="#FFD700" opacity=".85">
    <polygon points="15,25 17,31 23,31 18,35 20,41 15,37 10,41 12,35 7,31 13,31"/>
    <polygon points="105,18 107,23 112,23 108,26 110,31 105,28 100,31 102,26 98,23 103,23"/>
    <circle cx="108" cy="78" r="4"/><circle cx="12" cy="88" r="3"/>
  </g></svg>`,

  pyraxis: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="pg1" cx="45%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FF8C00"/>
      <stop offset="60%" stop-color="#FF4500"/>
      <stop offset="100%" stop-color="#8B0000"/>
    </radialGradient>
    <radialGradient id="pg2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FF4500" stop-opacity=".35"/>
      <stop offset="100%" stop-color="#FF4500" stop-opacity="0"/>
    </radialGradient>
    <filter id="pglow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="5" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <circle cx="60" cy="65" r="52" fill="url(#pg2)"/>
  <!-- Body -->
  <ellipse cx="60" cy="70" rx="32" ry="35" fill="url(#pg1)" filter="url(#pglow)"/>
  <!-- Belly -->
  <ellipse cx="60" cy="76" rx="20" ry="22" fill="#FFB74D" opacity=".6"/>
  <!-- Wings -->
  <path d="M28,50 Q5,30 15,60 Q20,65 32,62 Z" fill="#8B0000" opacity=".8"/>
  <path d="M92,50 Q115,30 105,60 Q100,65 88,62 Z" fill="#8B0000" opacity=".8"/>
  <path d="M28,50 Q10,35 18,58 Q23,62 32,60 Z" fill="#FF4500" opacity=".5"/>
  <path d="M92,50 Q110,35 102,58 Q97,62 88,60 Z" fill="#FF4500" opacity=".5"/>
  <!-- Neck & head -->
  <ellipse cx="60" cy="42" rx="22" ry="24" fill="url(#pg1)"/>
  <!-- Horns -->
  <polygon points="48,22 44,6 52,20" fill="#8B0000"/>
  <polygon points="72,22 76,6 68,20" fill="#8B0000"/>
  <polygon points="48,22 44,6 52,20" fill="#FF8C00" opacity=".5"/>
  <!-- Eyes -->
  <ellipse cx="50" cy="38" rx="7" ry="8" fill="#FFF176"/>
  <ellipse cx="70" cy="38" rx="7" ry="8" fill="#FFF176"/>
  <ellipse cx="50" cy="39" rx="3.5" ry="6" fill="#1A0000"/>
  <ellipse cx="70" cy="39" rx="3.5" ry="6" fill="#1A0000"/>
  <circle cx="48" cy="36" r="2" fill="white" opacity=".7"/>
  <circle cx="68" cy="36" r="2" fill="white" opacity=".7"/>
  <!-- Nostrils -->
  <circle cx="55" cy="50" r="2.5" fill="#8B0000"/>
  <circle cx="65" cy="50" r="2.5" fill="#8B0000"/>
  <!-- Teeth -->
  <path d="M50,58 L54,52 L58,58 Z" fill="white"/>
  <path d="M62,58 L66,52 L70,58 Z" fill="white"/>
  <!-- Tail -->
  <path d="M75,95 Q95,105 85,115 Q78,118 70,108" fill="#FF4500" stroke="#8B0000" stroke-width="1"/>
  <!-- Flame tip -->
  <path d="M85,115 Q92,120 88,108 Q86,112 83,112 Z" fill="#FFD700"/>
  <!-- Scales -->
  <g fill="#8B0000" opacity=".4">
    <ellipse cx="50" cy="70" rx="5" ry="3" transform="rotate(-20,50,70)"/>
    <ellipse cx="60" cy="80" rx="5" ry="3"/>
    <ellipse cx="70" cy="70" rx="5" ry="3" transform="rotate(20,70,70)"/>
  </g></svg>`,

  aquavorn: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="aq1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B2EBF2"/>
      <stop offset="40%" stop-color="#0288D1"/>
      <stop offset="100%" stop-color="#004D6E"/>
    </linearGradient>
    <radialGradient id="aq2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#29B6F6" stop-opacity=".4"/>
      <stop offset="100%" stop-color="#0288D1" stop-opacity="0"/>
    </radialGradient>
    <filter id="aqglow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="5" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <circle cx="60" cy="60" r="54" fill="url(#aq2)"/>
  <!-- Tail / lower body -->
  <path d="M60,115 Q40,100 38,80 Q36,65 50,55 Q55,75 60,80 Q65,75 70,55 Q84,65 82,80 Q80,100 60,115 Z"
        fill="url(#aq1)" filter="url(#aqglow)"/>
  <!-- Tail fin -->
  <path d="M52,113 Q60,125 68,113" fill="#4FC3F7" opacity=".8"/>
  <!-- Body -->
  <ellipse cx="60" cy="55" rx="30" ry="35" fill="url(#aq1)" filter="url(#aqglow)"/>
  <!-- Belly shimmer -->
  <ellipse cx="60" cy="58" rx="18" ry="22" fill="#B2EBF2" opacity=".35"/>
  <!-- Side fins -->
  <path d="M30,55 Q12,48 16,68 Q22,72 34,65 Z" fill="#4FC3F7" opacity=".9"/>
  <path d="M90,55 Q108,48 104,68 Q98,72 86,65 Z" fill="#4FC3F7" opacity=".9"/>
  <!-- Head -->
  <ellipse cx="60" cy="30" rx="22" ry="25" fill="url(#aq1)"/>
  <!-- Crown/frill -->
  <path d="M40,20 Q45,8 50,18 Q55,8 60,18 Q65,8 70,18 Q75,8 80,20" stroke="#4FC3F7" stroke-width="3" fill="none" stroke-linecap="round"/>
  <!-- Eyes -->
  <ellipse cx="49" cy="27" rx="8" ry="9" fill="#E0F7FA"/>
  <ellipse cx="71" cy="27" rx="8" ry="9" fill="#E0F7FA"/>
  <ellipse cx="49" cy="28" rx="5" ry="6.5" fill="#0D47A1"/>
  <ellipse cx="71" cy="28" rx="5" ry="6.5" fill="#0D47A1"/>
  <circle cx="46" cy="25" r="2.5" fill="white"/>
  <circle cx="68" cy="25" r="2.5" fill="white"/>
  <!-- Smile -->
  <path d="M51,40 Q60,47 69,40" stroke="#01579B" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Scales pattern -->
  <g fill="#29B6F6" opacity=".3">
    <ellipse cx="50" cy="60" rx="6" ry="4" transform="rotate(-15,50,60)"/>
    <ellipse cx="70" cy="60" rx="6" ry="4" transform="rotate(15,70,60)"/>
    <ellipse cx="60" cy="75" rx="6" ry="4"/>
  </g>
  <!-- Water droplets -->
  <g fill="#4FC3F7" opacity=".7">
    <circle cx="15" cy="30" r="4"/><circle cx="105" cy="40" r="3"/>
    <circle cx="20" cy="90" r="2.5"/><circle cx="100" cy="85" r="3.5"/>
  </g></svg>`,

  verdanis: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="sg1" cx="50%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#C8E6C9"/>
      <stop offset="50%" stop-color="#4CAF50"/>
      <stop offset="100%" stop-color="#1B5E20"/>
    </radialGradient>
    <radialGradient id="sg2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#66BB6A" stop-opacity=".4"/>
      <stop offset="100%" stop-color="#66BB6A" stop-opacity="0"/>
    </radialGradient>
    <filter id="sglow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="5" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <circle cx="60" cy="60" r="54" fill="url(#sg2)"/>
  <!-- Leaf wings -->
  <path d="M32,60 Q8,30 20,18 Q32,10 40,40 Q36,50 32,60 Z" fill="#2E7D32" opacity=".85" filter="url(#sglow)"/>
  <path d="M88,60 Q112,30 100,18 Q88,10 80,40 Q84,50 88,60 Z" fill="#2E7D32" opacity=".85" filter="url(#sglow)"/>
  <path d="M32,60 Q10,35 22,22 Q32,16 40,42" fill="#66BB6A" opacity=".5"/>
  <path d="M88,60 Q110,35 98,22 Q88,16 80,42" fill="#66BB6A" opacity=".5"/>
  <!-- Wing veins -->
  <path d="M32,60 Q20,40 26,22" stroke="#A5D6A7" stroke-width="1.5" fill="none" opacity=".6"/>
  <path d="M88,60 Q100,40 94,22" stroke="#A5D6A7" stroke-width="1.5" fill="none" opacity=".6"/>
  <!-- Dress/body -->
  <path d="M45,80 Q40,100 50,115 Q60,118 70,115 Q80,100 75,80 Z" fill="#2E7D32" filter="url(#sglow)"/>
  <path d="M45,80 Q42,100 52,113 Q60,116 68,113 Q78,100 75,80 Z" fill="#66BB6A" opacity=".4"/>
  <!-- Torso -->
  <ellipse cx="60" cy="68" rx="22" ry="20" fill="url(#sg1)" filter="url(#sglow)"/>
  <!-- Bodice pattern -->
  <ellipse cx="60" cy="68" rx="14" ry="12" fill="#A5D6A7" opacity=".3"/>
  <!-- Head -->
  <ellipse cx="60" cy="38" rx="22" ry="24" fill="url(#sg1)"/>
  <!-- Flower crown -->
  <g transform="translate(60,18)">
    <circle cx="-14" cy="-2" r="6" fill="#FF80AB"/><circle cx="-14" cy="-2" r="3" fill="#FF1744"/>
    <circle cx="-5"  cy="-8" r="5" fill="#FFD740"/><circle cx="-5"  cy="-8" r="2.5" fill="#FF9100"/>
    <circle cx="5"   cy="-8" r="5" fill="#FF80AB"/><circle cx="5"   cy="-8" r="2.5" fill="#FF1744"/>
    <circle cx="14"  cy="-2" r="6" fill="#FFD740"/><circle cx="14"  cy="-2" r="3" fill="#FF9100"/>
  </g>
  <!-- Hair -->
  <path d="M38,30 Q35,14 48,10 Q52,22 38,30 Z" fill="#1B5E20"/>
  <path d="M82,30 Q85,14 72,10 Q68,22 82,30 Z" fill="#1B5E20"/>
  <!-- Eyes -->
  <ellipse cx="50" cy="38" rx="7" ry="8" fill="#E8F5E9"/>
  <ellipse cx="70" cy="38" rx="7" ry="8" fill="#E8F5E9"/>
  <ellipse cx="50" cy="39" rx="4" ry="5.5" fill="#1B5E20"/>
  <ellipse cx="70" cy="39" rx="4" ry="5.5" fill="#1B5E20"/>
  <circle cx="48" cy="36" r="2.5" fill="white"/>
  <circle cx="68" cy="36" r="2.5" fill="white"/>
  <!-- Smile -->
  <path d="M52,49 Q60,56 68,49" stroke="#1B5E20" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Cheeks -->
  <ellipse cx="42" cy="47" rx="6" ry="3.5" fill="#FF80AB" opacity=".45"/>
  <ellipse cx="78" cy="47" rx="6" ry="3.5" fill="#FF80AB" opacity=".45"/>
  <!-- Leaf floaties -->
  <g fill="#66BB6A" opacity=".7">
    <path d="M10,60 Q15,52 22,60 Q15,68 10,60 Z"/>
    <path d="M98,55 Q103,47 110,55 Q103,63 98,55 Z"/>
    <path d="M15,90 Q18,84 24,90 Q18,96 15,90 Z"/>
  </g></svg>`,

  fulgrath: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="vg1" cx="45%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#FFF9C4"/>
      <stop offset="50%" stop-color="#F9A825"/>
      <stop offset="100%" stop-color="#E65100"/>
    </radialGradient>
    <radialGradient id="vg2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFEE58" stop-opacity=".45"/>
      <stop offset="100%" stop-color="#FFEE58" stop-opacity="0"/>
    </radialGradient>
    <filter id="vglow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="5" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <circle cx="60" cy="65" r="52" fill="url(#vg2)"/>
  <!-- Body -->
  <ellipse cx="60" cy="70" rx="28" ry="30" fill="url(#vg1)" filter="url(#vglow)"/>
  <!-- Chest marking -->
  <path d="M55,58 L60,48 L65,58 L72,52 L65,68 L60,58 L55,68 L48,52 Z" fill="#FFF9C4" opacity=".8"/>
  <!-- Legs -->
  <rect x="42" y="95" width="12" height="18" rx="6" fill="#F9A825"/>
  <rect x="66" y="95" width="12" height="18" rx="6" fill="#F9A825"/>
  <!-- Head -->
  <ellipse cx="60" cy="42" rx="26" ry="28" fill="url(#vg1)"/>
  <!-- Ears (pointed) -->
  <polygon points="38,22 30,4 48,18" fill="#F9A825"/>
  <polygon points="82,22 90,4 72,18" fill="#F9A825"/>
  <polygon points="38,22 33,10 46,20" fill="#FFF9C4" opacity=".6"/>
  <polygon points="82,22 87,10 74,20" fill="#FFF9C4" opacity=".6"/>
  <!-- Muzzle -->
  <ellipse cx="60" cy="54" rx="14" ry="10" fill="#FFF9C4" opacity=".7"/>
  <!-- Eyes -->
  <ellipse cx="49" cy="37" rx="8" ry="9" fill="#FFF9C4"/>
  <ellipse cx="71" cy="37" rx="8" ry="9" fill="#FFF9C4"/>
  <ellipse cx="49" cy="38" rx="4" ry="6" fill="#1A1A00"/>
  <ellipse cx="71" cy="38" rx="4" ry="6" fill="#1A1A00"/>
  <circle cx="47" cy="35" r="2.5" fill="white"/>
  <circle cx="69" cy="35" r="2.5" fill="white"/>
  <circle cx="47" cy="35" r="1" fill="#FFF176"/>
  <circle cx="69" cy="35" r="1" fill="#FFF176"/>
  <!-- Nose -->
  <ellipse cx="60" cy="52" rx="4" ry="3" fill="#E65100"/>
  <!-- Tail (lightning bolt shaped) -->
  <path d="M88,75 L100,58 L93,60 L105,42 L96,46 L108,28 L99,55 L106,52 L94,70 L100,67 Z"
        fill="#FFD740" stroke="#F9A825" stroke-width="1"/>
  <!-- Electric sparks -->
  <g fill="#FFEE58" opacity=".8">
    <path d="M12,50 L16,44 L14,46 L18,40 L15,50 L17,47 Z"/>
    <path d="M102,85 L106,79 L104,81 L108,75 L105,85 L107,82 Z"/>
    <circle cx="15" cy="80" r="3"/><circle cx="108" cy="35" r="2.5"/>
  </g></svg>`,

  umbravex: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="sfg1" cx="50%" cy="40%" r="65%">
      <stop offset="0%" stop-color="#CE93D8"/>
      <stop offset="50%" stop-color="#6A1B9A"/>
      <stop offset="100%" stop-color="#12005E"/>
    </radialGradient>
    <radialGradient id="sfg2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#AB47BC" stop-opacity=".45"/>
      <stop offset="100%" stop-color="#AB47BC" stop-opacity="0"/>
    </radialGradient>
    <filter id="sfglow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="6" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <circle cx="60" cy="60" r="54" fill="url(#sfg2)"/>
  <!-- Shadow tendrils -->
  <path d="M30,100 Q10,90 8,70 Q15,75 20,85 Q18,65 30,60 Q25,75 35,80 Z" fill="#4A148C" opacity=".7" filter="url(#sfglow)"/>
  <path d="M90,100 Q110,90 112,70 Q105,75 100,85 Q102,65 90,60 Q95,75 85,80 Z" fill="#4A148C" opacity=".7" filter="url(#sfglow)"/>
  <path d="M60,110 Q45,115 40,105 Q50,108 55,100 Z" fill="#4A148C" opacity=".6"/>
  <path d="M60,110 Q75,115 80,105 Q70,108 65,100 Z" fill="#4A148C" opacity=".6"/>
  <!-- Cloak/body -->
  <path d="M30,65 Q25,100 45,115 Q60,120 75,115 Q95,100 90,65 Q80,85 60,88 Q40,85 30,65 Z"
        fill="url(#sfg1)" filter="url(#sfglow)"/>
  <!-- Inner lighter cloak -->
  <path d="M35,65 Q32,95 50,110 Q60,114 70,110 Q88,95 85,65 Q75,82 60,84 Q45,82 35,65 Z"
        fill="#9C27B0" opacity=".4"/>
  <!-- Head -->
  <ellipse cx="60" cy="45" rx="26" ry="28" fill="url(#sfg1)" filter="url(#sfglow)"/>
  <!-- Hood -->
  <path d="M34,35 Q36,18 60,14 Q84,18 86,35 Q80,22 60,20 Q40,22 34,35 Z" fill="#12005E" opacity=".8"/>
  <!-- Eyes (glowing) -->
  <ellipse cx="48" cy="42" rx="9" ry="10" fill="#12005E"/>
  <ellipse cx="72" cy="42" rx="9" ry="10" fill="#12005E"/>
  <ellipse cx="48" cy="42" rx="6" ry="7" fill="#CE93D8"/>
  <ellipse cx="72" cy="42" rx="6" ry="7" fill="#CE93D8"/>
  <ellipse cx="48" cy="42" rx="3" ry="4" fill="white"/>
  <ellipse cx="72" cy="42" rx="3" ry="4" fill="white"/>
  <!-- Eye glow -->
  <ellipse cx="48" cy="42" rx="9" ry="10" fill="#AB47BC" opacity=".25" filter="url(#sfglow)"/>
  <ellipse cx="72" cy="42" rx="9" ry="10" fill="#AB47BC" opacity=".25" filter="url(#sfglow)"/>
  <!-- Fang smile -->
  <path d="M50,58 Q60,64 70,58" stroke="#9C27B0" stroke-width="2" fill="none" stroke-linecap="round"/>
  <polygon points="55,62 57,70 59,62" fill="white"/>
  <polygon points="61,62 63,70 65,62" fill="white"/>
  <!-- Floating orbs -->
  <g fill="#CE93D8" opacity=".8">
    <circle cx="14" cy="30" r="5" filter="url(#sfglow)"/>
    <circle cx="106" cy="25" r="4" filter="url(#sfglow)"/>
    <circle cx="10" cy="72" r="3" filter="url(#sfglow)"/>
    <circle cx="110" cy="75" r="3.5" filter="url(#sfglow)"/>
  </g></svg>`,

  glacivyn: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="fg1" cx="50%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#E0F7FA"/>
      <stop offset="50%" stop-color="#00BCD4"/>
      <stop offset="100%" stop-color="#006064"/>
    </radialGradient>
    <radialGradient id="fg2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#00BCD4" stop-opacity=".4"/>
      <stop offset="100%" stop-color="#00BCD4" stop-opacity="0"/>
    </radialGradient>
    <filter id="fglow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="5" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <circle cx="60" cy="60" r="54" fill="url(#fg2)"/>
  <!-- Snowflake wings -->
  <g opacity=".85" filter="url(#fglow)">
    <!-- Left wing -->
    <line x1="30" y1="60" x2="5" y2="60" stroke="#B2EBF2" stroke-width="3"/>
    <line x1="30" y1="60" x2="10" y2="40" stroke="#B2EBF2" stroke-width="3"/>
    <line x1="30" y1="60" x2="10" y2="80" stroke="#B2EBF2" stroke-width="3"/>
    <line x1="20" y1="60" x2="14" y2="52" stroke="#B2EBF2" stroke-width="2"/>
    <line x1="20" y1="60" x2="14" y2="68" stroke="#B2EBF2" stroke-width="2"/>
    <!-- Right wing -->
    <line x1="90" y1="60" x2="115" y2="60" stroke="#B2EBF2" stroke-width="3"/>
    <line x1="90" y1="60" x2="110" y2="40" stroke="#B2EBF2" stroke-width="3"/>
    <line x1="90" y1="60" x2="110" y2="80" stroke="#B2EBF2" stroke-width="3"/>
    <line x1="100" y1="60" x2="106" y2="52" stroke="#B2EBF2" stroke-width="2"/>
    <line x1="100" y1="60" x2="106" y2="68" stroke="#B2EBF2" stroke-width="2"/>
  </g>
  <!-- Dress -->
  <path d="M43,80 Q38,105 50,118 Q60,122 70,118 Q82,105 77,80 Z" fill="url(#fg1)" filter="url(#fglow)"/>
  <!-- Ice crystal skirt pattern -->
  <path d="M43,80 L50,95 L45,105 L55,98 L60,112 L65,98 L75,105 L70,95 L77,80 Z" fill="#E0F7FA" opacity=".35"/>
  <!-- Torso -->
  <ellipse cx="60" cy="67" rx="22" ry="20" fill="url(#fg1)" filter="url(#fglow)"/>
  <!-- Crystal bodice -->
  <path d="M48,58 L60,50 L72,58 L68,76 L60,80 L52,76 Z" fill="#B2EBF2" opacity=".4"/>
  <!-- Head -->
  <ellipse cx="60" cy="36" rx="22" ry="24" fill="url(#fg1)"/>
  <!-- Ice crown -->
  <g fill="#E0F7FA" filter="url(#fglow)">
    <polygon points="38,24 36,12 42,22"/>
    <polygon points="50,20 48,7 54,18"/>
    <polygon points="60,18 60,4 64,18"/>
    <polygon points="70,20 72,7 66,18"/>
    <polygon points="82,24 84,12 78,22"/>
  </g>
  <!-- Hair (white-blue) -->
  <path d="M40,28 Q36,16 48,12 Q50,22 40,28 Z" fill="#B2EBF2"/>
  <path d="M80,28 Q84,16 72,12 Q70,22 80,28 Z" fill="#B2EBF2"/>
  <!-- Eyes -->
  <ellipse cx="50" cy="35" rx="7.5" ry="8.5" fill="#E0F7FA"/>
  <ellipse cx="70" cy="35" rx="7.5" ry="8.5" fill="#E0F7FA"/>
  <ellipse cx="50" cy="36" rx="4" ry="5.5" fill="#006064"/>
  <ellipse cx="70" cy="36" rx="4" ry="5.5" fill="#006064"/>
  <circle cx="48" cy="33" r="2.5" fill="white"/>
  <circle cx="68" cy="33" r="2.5" fill="white"/>
  <circle cx="48" cy="33" r="1" fill="#B2EBF2"/>
  <circle cx="68" cy="33" r="1" fill="#B2EBF2"/>
  <!-- Smile -->
  <path d="M52,47 Q60,54 68,47" stroke="#006064" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Cheeks -->
  <ellipse cx="41" cy="44" rx="6" ry="3.5" fill="#B2EBF2" opacity=".6"/>
  <ellipse cx="79" cy="44" rx="6" ry="3.5" fill="#B2EBF2" opacity=".6"/>
  <!-- Ice crystals floating -->
  <g fill="#B2EBF2" opacity=".7">
    <polygon points="10,25 12,20 14,25 12,30"/><polygon points="108,30 110,25 112,30 110,35"/>
    <polygon points="8,80 10,75 12,80 10,85"/><polygon points="110,78 112,73 114,78 112,83"/>
  </g></svg>`,

  terrakor: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="tg1" cx="50%" cy="35%" r="65%">
      <stop offset="0%" stop-color="#A1887F"/>
      <stop offset="55%" stop-color="#5D4037"/>
      <stop offset="100%" stop-color="#2D1B15"/>
    </radialGradient>
    <radialGradient id="tg2" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#8D6E63" stop-opacity=".4"/>
      <stop offset="100%" stop-color="#8D6E63" stop-opacity="0"/>
    </radialGradient>
    <filter id="tglow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="5" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <circle cx="60" cy="65" r="52" fill="url(#tg2)"/>
  <!-- Feet/base -->
  <rect x="30" y="100" width="22" height="16" rx="4" fill="#3E2723"/>
  <rect x="68" y="100" width="22" height="16" rx="4" fill="#3E2723"/>
  <!-- Rock chunks on legs -->
  <rect x="28" y="92" width="26" height="14" rx="3" fill="url(#tg1)"/>
  <rect x="66" y="92" width="26" height="14" rx="3" fill="url(#tg1)"/>
  <!-- Body (boxy/blocky) -->
  <rect x="30" y="55" width="60" height="50" rx="8" fill="url(#tg1)" filter="url(#tglow)"/>
  <!-- Belly stone -->
  <ellipse cx="60" cy="78" rx="22" ry="18" fill="#795548" opacity=".5"/>
  <!-- Glowing rune on chest -->
  <g filter="url(#tglow)">
    <path d="M52,72 L60,62 L68,72 L64,80 L56,80 Z" fill="#FF6F00" opacity=".9"/>
    <path d="M56,72 L60,66 L64,72 L62,78 L58,78 Z" fill="#FFB300" opacity=".8"/>
    <path d="M55,76 L65,76" stroke="#FFD740" stroke-width="2"/>
    <path d="M60,68 L60,80" stroke="#FFD740" stroke-width="2"/>
  </g>
  <!-- Rock arm left -->
  <rect x="10" y="58" width="22" height="36" rx="6" fill="url(#tg1)"/>
  <rect x="6" y="58" width="16" height="22" rx="5" fill="#795548"/>
  <!-- Rock arm right -->
  <rect x="88" y="58" width="22" height="36" rx="6" fill="url(#tg1)"/>
  <rect x="98" y="58" width="16" height="22" rx="5" fill="#795548"/>
  <!-- Fists -->
  <rect x="5" y="86" width="20" height="14" rx="4" fill="#4E342E"/>
  <rect x="95" y="86" width="20" height="14" rx="4" fill="#4E342E"/>
  <!-- Head (blocky) -->
  <rect x="30" y="18" width="60" height="46" rx="8" fill="url(#tg1)" filter="url(#tglow)"/>
  <!-- Rock horns -->
  <polygon points="36,20 28,4 42,18" fill="#4E342E"/>
  <polygon points="84,20 92,4 78,18" fill="#4E342E"/>
  <polygon points="36,20 32,10 40,19" fill="#795548" opacity=".6"/>
  <polygon points="84,20 88,10 80,19" fill="#795548" opacity=".6"/>
  <!-- Brow ridge -->
  <rect x="30" y="28" width="60" height="10" rx="4" fill="#3E2723" opacity=".6"/>
  <!-- Eyes (glowing amber) -->
  <rect x="36" y="34" width="18" height="14" rx="4" fill="#1A0800"/>
  <rect x="66" y="34" width="18" height="14" rx="4" fill="#1A0800"/>
  <rect x="38" y="36" width="14" height="10" rx="3" fill="#FF6F00" filter="url(#tglow)"/>
  <rect x="68" y="36" width="14" height="10" rx="3" fill="#FF6F00" filter="url(#tglow)"/>
  <rect x="42" y="38" width="6" height="6" rx="1" fill="#FFB300"/>
  <rect x="72" y="38" width="6" height="6" rx="1" fill="#FFB300"/>
  <!-- Mouth (cracks) -->
  <path d="M40,52 L50,58 L60,52 L70,58 L80,52" stroke="#1A0800" stroke-width="3" fill="none" stroke-linecap="round"/>
  <!-- Rock texture details -->
  <g fill="#3E2723" opacity=".4">
    <rect x="34" y="62" width="10" height="6" rx="2"/>
    <rect x="76" y="62" width="10" height="6" rx="2"/>
    <rect x="52" y="90" width="16" height="6" rx="2"/>
  </g>
  <!-- Ground cracks -->
  <g stroke="#795548" stroke-width="2" opacity=".5" fill="none">
    <path d="M15,112 L25,108 L20,118"/><path d="M95,112 L105,108 L100,118"/>
  </g></svg>`
};

// ─── TYPE CONFIGS ─────────────────────────────────────────────────────────────
const TYPE_CONFIG = {
  light:    { color: 'rgba(255,215,0,.25)',    glow: '#FFD700', icon: '✨' },
  fire:     { color: 'rgba(255,69,0,.25)',     glow: '#FF6B35', icon: '🔥' },
  water:    { color: 'rgba(2,136,209,.25)',    glow: '#29B6F6', icon: '💧' },
  nature:   { color: 'rgba(46,125,50,.25)',    glow: '#66BB6A', icon: '🌿' },
  electric: { color: 'rgba(249,168,37,.25)',   glow: '#FFEE58', icon: '⚡' },
  dark:     { color: 'rgba(106,27,154,.25)',   glow: '#CE93D8', icon: '🌑' },
  ice:      { color: 'rgba(0,151,167,.25)',    glow: '#00BCD4', icon: '❄️' },
  earth:    { color: 'rgba(93,64,55,.25)',     glow: '#A1887F', icon: '🪨' }
};

const RARITY_ORDER = ['common', 'uncommon', 'rare', 'legendary'];

// ─── GAME STATE ───────────────────────────────────────────────────────────────
const State = {
  socket: null,
  player: null,
  creatureDefs: [],
  worldCreatures: [],
  otherPlayers: [],
  currentBattle: null,
  currentEncounter: null,
  map: null,
  playerMarker: null,
  creatureMarkers: new Map(),
  playerMarkers: new Map(),
  isOnline: navigator.onLine,
  currentScreen: 'splash'
};

// ─── GAME NAMESPACE ───────────────────────────────────────────────────────────
const Game = {
  // ── Init ──────────────────────────────────────────────────────────────────
  init() {
    this.spawnParticles();
    this.registerSW();
    this.setupOfflineDetection();
    document.getElementById('btn-play').addEventListener('click', () => this.startGame());
    document.getElementById('inp-username').addEventListener('keydown', e => {
      if (e.key === 'Enter') this.startGame();
    });
    if (!navigator.onLine) {
      document.getElementById('offline-badge').classList.remove('hidden');
    }
  },

  spawnParticles() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 40; i++) {
      const p = document.createElement('div');
      const size = Math.random() * 4 + 1;
      Object.assign(p.style, {
        position: 'absolute',
        width: size + 'px', height: size + 'px',
        borderRadius: '50%',
        background: ['#6C63FF','#FFD700','#4FC3F7','#CE93D8'][Math.floor(Math.random()*4)],
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        opacity: Math.random() * 0.6 + 0.2,
        animation: `orb-float ${4 + Math.random() * 6}s ease-in-out ${Math.random() * -8}s infinite`
      });
      container.appendChild(p);
    }
  },

  registerSW() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
  },

  setupOfflineDetection() {
    const badge = document.getElementById('offline-badge');
    window.addEventListener('online',  () => { State.isOnline = true;  badge.classList.add('hidden'); this.toast('Back online! 🌐'); });
    window.addEventListener('offline', () => { State.isOnline = false; badge.classList.remove('hidden'); this.toast('Offline mode ⚡'); });
  },

  // ── Start ──────────────────────────────────────────────────────────────────
  startGame() {
    const username = document.getElementById('inp-username').value.trim() || 'Trainer';
    document.getElementById('btn-play').disabled = true;
    document.getElementById('btn-play').textContent = 'Connecting...';

    this.getLocation(pos => {
      const lat = pos ? pos.coords.latitude  : 40.7128 + (Math.random()-.5)*.01;
      const lng = pos ? pos.coords.longitude : -74.006 + (Math.random()-.5)*.01;
      this.connectSocket(username, lat, lng);
    });
  },

  getLocation(cb) {
    if (!navigator.geolocation) { cb(null); return; }
    navigator.geolocation.getCurrentPosition(cb, () => cb(null), { timeout: 5000, maximumAge: 30000 });
  },

  connectSocket(username, lat, lng) {
    State.socket = io({ transports: ['websocket', 'polling'] });

    State.socket.on('connect', () => {
      State.socket.emit('join', { username, lat, lng });
    });

    State.socket.on('joined', ({ player, nearbyCreatures, creatureDefs }) => {
      State.player = player;
      State.creatureDefs = creatureDefs;
      State.worldCreatures = nearbyCreatures;
      this.showScreen('map');
      this.initMap(lat, lng);
      this.updateHUD();
      this.loadLocalCollection();
      this.toast(`Welcome, ${player.username}! 🎮`);
    });

    State.socket.on('connect_error', () => {
      this.startOfflineMode(username, lat, lng);
    });

    State.socket.on('existingPlayers', players => {
      State.otherPlayers = players;
      players.forEach(p => this.addPlayerMarker(p));
      document.getElementById('online-count').textContent = `${players.length + 1} online`;
    });
    State.socket.on('playerJoined', p => {
      State.otherPlayers.push(p);
      this.addPlayerMarker(p);
      document.getElementById('online-count').textContent = `${State.otherPlayers.length + 1} online`;
    });
    State.socket.on('playerMoved', ({ id, lat, lng }) => {
      const m = State.playerMarkers.get(id);
      if (m) m.setLatLng([lat, lng]);
    });
    State.socket.on('playerLeft', ({ id }) => {
      const m = State.playerMarkers.get(id);
      if (m) { m.remove(); State.playerMarkers.delete(id); }
      State.otherPlayers = State.otherPlayers.filter(p => p.id !== id);
      document.getElementById('online-count').textContent = `${State.otherPlayers.length + 1} online`;
    });
    State.socket.on('creaturesUpdate', creatures => {
      State.worldCreatures = creatures;
      this.refreshCreatureMarkers();
      this.updateRadar();
    });
    State.socket.on('creatureGone', ({ creatureId }) => {
      State.worldCreatures = State.worldCreatures.filter(c => c.id !== creatureId);
      const m = State.creatureMarkers.get(creatureId);
      if (m) { m.remove(); State.creatureMarkers.delete(creatureId); }
      this.updateRadar();
    });
    State.socket.on('encounterStart', ({ creature, def }) => {
      this.showEncounter(creature, def);
    });
    State.socket.on('encounterError', msg => this.toast(msg));
    State.socket.on('battleStarted', battle => {
      State.currentBattle = battle;
      this.showBattle(battle);
    });
    State.socket.on('battleUpdate', ({ battle, latestLog }) => {
      State.currentBattle = battle;
      this.updateBattleUI(battle, latestLog[0]);
    });
    State.socket.on('battleEnded', data => this.handleBattleEnd(data));
    State.socket.on('catchFailed', ({ battle, log }) => {
      State.currentBattle = battle;
      this.updateBattleUI(battle, log[0]);
      this.shakeEl(document.getElementById('b-wild-svg'));
      this.toast('It broke free! 💨');
    });
    State.socket.on('battleError', msg => this.toast(msg));
  },

  startOfflineMode(username, lat, lng) {
    State.isOnline = false;
    State.player = {
      id: 'offline', username, lat, lng,
      level: 1, xp: 0, coins: 500, collection: []
    };
    fetch('/api/defs').then(r => r.json()).then(defs => {
      State.creatureDefs = defs;
    }).catch(() => {
      State.creatureDefs = [];
    });
    State.worldCreatures = this.generateOfflineCreatures(lat, lng);
    this.loadLocalCollection();
    this.showScreen('map');
    this.initMap(lat, lng);
    this.updateHUD();
    this.toast('Playing offline ⚡');
    document.getElementById('offline-badge').classList.remove('hidden');
  },

  generateOfflineCreatures(lat, lng) {
    const ids = ['solaris','pyraxis','aquavorn','verdanis','fulgrath','umbravex','glacivyn','terrakor'];
    const creatures = [];
    for (let i = 0; i < 12; i++) {
      creatures.push({
        id: 'off_' + i,
        defId: ids[Math.floor(Math.random() * ids.length)],
        lat: lat + (Math.random() - .5) * .009,
        lng: lng + (Math.random() - .5) * .012,
        level: Math.floor(Math.random() * 10) + 1
      });
    }
    return creatures;
  },

  loadLocalCollection() {
    try {
      const saved = JSON.parse(localStorage.getItem('nh_collection') || '[]');
      if (State.player && saved.length) {
        State.player.collection = saved;
      }
    } catch {}
  },

  saveLocalCollection() {
    try {
      if (State.player) localStorage.setItem('nh_collection', JSON.stringify(State.player.collection));
    } catch {}
  },

  // ── Map ────────────────────────────────────────────────────────────────────
  initMap(lat, lng) {
    State.map = L.map('map', {
      center: [lat, lng], zoom: 17,
      zoomControl: false, attributionControl: false
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      maxZoom: 20, subdomains: 'abcd'
    }).addTo(State.map);

    // Player marker
    const playerIcon = L.divIcon({
      className: 'player-marker-wrap',
      html: '<div class="player-marker-dot"></div>',
      iconSize: [20, 20], iconAnchor: [10, 10]
    });
    State.playerMarker = L.marker([lat, lng], { icon: playerIcon, zIndexOffset: 1000 }).addTo(State.map);

    this.refreshCreatureMarkers();
    this.updateRadar();
    this.startLocationWatch();
  },

  startLocationWatch() {
    if (!navigator.geolocation) return;
    navigator.geolocation.watchPosition(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      if (State.player) { State.player.lat = lat; State.player.lng = lng; }
      if (State.playerMarker) State.playerMarker.setLatLng([lat, lng]);
      if (State.map) State.map.setView([lat, lng], State.map.getZoom(), { animate: true });
      if (State.socket?.connected) {
        State.socket.emit('move', { lat, lng });
        State.socket.emit('getCreatures', { lat, lng });
      } else {
        State.worldCreatures = this.generateOfflineCreatures(lat, lng);
        this.refreshCreatureMarkers();
        this.updateRadar();
      }
    }, null, { enableHighAccuracy: true, maximumAge: 5000 });
  },

  refreshCreatureMarkers() {
    const existing = new Set(State.creatureMarkers.keys());
    State.worldCreatures.forEach(c => {
      existing.delete(c.id);
      if (!State.creatureMarkers.has(c.id)) {
        this.addCreatureMarker(c);
      }
    });
    existing.forEach(id => {
      const m = State.creatureMarkers.get(id);
      if (m) { m.remove(); State.creatureMarkers.delete(id); }
    });
  },

  getDef(defId) {
    return State.creatureDefs.find(d => d.id === defId) || { id: defId, name: defId, type: 'earth', rarity: 'common', colors: { primary: '#888', secondary: '#aaa' } };
  },

  addCreatureMarker(creature) {
    const def = this.getDef(creature.defId);
    const svg = CREATURE_SVGS[def.id] || CREATURE_SVGS.terrakor;
    const html = `<div class="creature-marker-wrap rarity-${def.rarity}">
      <div class="creature-marker-inner" style="background:${def.colors.primary}20">
        <svg viewBox="0 0 120 120" style="width:44px;height:44px">${svg.replace(/<svg[^>]*>/,'').replace('</svg>','')}</svg>
        <span class="creature-level-badge">Lv${creature.level}</span>
      </div>
    </div>`;
    const icon = L.divIcon({ className: '', html, iconSize: [56, 56], iconAnchor: [28, 28] });
    const marker = L.marker([creature.lat, creature.lng], { icon }).addTo(State.map);
    marker.on('click', () => this.onCreatureTap(creature));
    State.creatureMarkers.set(creature.id, marker);
  },

  addPlayerMarker(p) {
    if (State.playerMarkers.has(p.id)) return;
    const html = `<div class="player-marker-wrap">
      <div class="player-marker-dot" style="background:#AB47BC" title="${p.username}"></div>
    </div>`;
    const icon = L.divIcon({ className: '', html, iconSize: [20, 20], iconAnchor: [10, 10] });
    const m = L.marker([p.lat, p.lng], { icon, zIndexOffset: 500 }).addTo(State.map);
    State.playerMarkers.set(p.id, m);
  },

  updateRadar() {
    const el = document.getElementById('radar-list');
    const nearby = State.worldCreatures.slice(0, 6);
    if (!nearby.length) { el.innerHTML = '<p style="font-size:11px;color:#9AA0B4;padding:4px">None nearby</p>'; return; }
    el.innerHTML = nearby.map(c => {
      const def = this.getDef(c.defId);
      return `<div class="radar-item" onclick="Game.onCreatureTap(Game.findCreature('${c.id}'))">
        <span class="radar-dot" style="background:${def.colors?.primary||'#888'}"></span>
        <span>${def.name}</span>
      </div>`;
    }).join('');
  },

  findCreature(id) { return State.worldCreatures.find(c => c.id === id); },

  onCreatureTap(creature) {
    if (!creature) return;
    if (State.socket?.connected) {
      State.socket.emit('encounter', { creatureId: creature.id });
    } else {
      const def = this.getDef(creature.defId);
      this.showEncounter(creature, def);
    }
  },

  scanArea() {
    const p = State.player;
    if (!p) return;
    this.toast('Scanning for creatures... 🔍');
    if (State.socket?.connected) {
      State.socket.emit('getCreatures', { lat: p.lat, lng: p.lng });
    } else {
      State.worldCreatures = this.generateOfflineCreatures(p.lat, p.lng);
      this.refreshCreatureMarkers();
      this.updateRadar();
      this.toast(`Found ${State.worldCreatures.length} creatures nearby!`);
    }
  },

  // ── Encounter ──────────────────────────────────────────────────────────────
  showEncounter(creature, def) {
    State.currentEncounter = { creature, def };
    const typeConf = TYPE_CONFIG[def.type] || TYPE_CONFIG.earth;

    document.documentElement.style.setProperty('--enc-color', typeConf.color);
    document.documentElement.style.setProperty('--enc-glow', typeConf.glow);

    const rarityEl = document.getElementById('enc-rarity');
    rarityEl.textContent = def.rarity.toUpperCase();
    rarityEl.className = `enc-rarity ${def.rarity}`;

    document.getElementById('enc-name').textContent = def.name;
    document.getElementById('enc-title').textContent = def.title;
    document.getElementById('enc-atk').textContent = def.baseAtk;
    document.getElementById('enc-def').textContent = def.baseDef;
    document.getElementById('enc-spd').textContent = def.baseSpd;
    document.getElementById('enc-level').textContent = `Lv.${creature.level}`;
    document.getElementById('enc-type').textContent = (typeConf.icon + ' ' + def.type).toUpperCase();
    document.getElementById('enc-type').className = `enc-type-badge type-${def.type}`;
    document.getElementById('enc-svg').innerHTML = CREATURE_SVGS[def.id] || CREATURE_SVGS.terrakor;
    document.getElementById('enc-aura').style.background = `radial-gradient(circle, ${typeConf.glow}66 0%, transparent 70%)`;

    document.getElementById('btn-battle').onclick = () => this.startBattle(creature.id);
    document.getElementById('btn-flee').onclick = () => this.showScreen('map');

    this.showScreen('encounter');
  },

  // ── Battle ─────────────────────────────────────────────────────────────────
  startBattle(creatureId) {
    if (State.socket?.connected) {
      State.socket.emit('startBattle', { creatureId });
    } else {
      this.startOfflineBattle(creatureId);
    }
  },

  startOfflineBattle(creatureId) {
    const creature = this.findCreature(creatureId);
    if (!creature) return;
    const wildDef = this.getDef(creature.defId);
    const wildMaxHp = Math.floor(wildDef.baseHp * (1 + creature.level * 0.1));

    const playerDef = State.creatureDefs.find(d => d.id === 'terrakor') || State.creatureDefs[0];
    const playerMaxHp = Math.floor((playerDef?.baseHp || 100) * 1.5);

    State.currentBattle = {
      id: 'offline_' + Date.now(),
      wildDef, wildLevel: creature.level, wildCreatureId: creatureId,
      wildCurrentHp: wildMaxHp, wildMaxHp,
      playerDef, playerLevel: 5,
      playerCurrentHp: playerMaxHp, playerMaxHp,
      turn: 'player', log: []
    };
    this.showBattle(State.currentBattle);
  },

  showBattle(battle) {
    document.getElementById('b-wild-name').textContent = battle.wildDef.name;
    document.getElementById('b-wild-level').textContent = `Lv.${battle.wildLevel}`;
    document.getElementById('b-player-name').textContent = battle.playerDef.name;
    document.getElementById('b-player-level').textContent = `Lv.${battle.playerLevel}`;

    document.getElementById('b-wild-svg').innerHTML = CREATURE_SVGS[battle.wildDef.id] || CREATURE_SVGS.terrakor;
    document.getElementById('b-player-svg').innerHTML = CREATURE_SVGS[battle.playerDef.id] || CREATURE_SVGS.terrakor;

    this.updateBattleHPs(battle);

    const moves = battle.playerDef.abilities || [];
    for (let i = 0; i < 4; i++) {
      const btn = document.getElementById(`move-${i}`);
      const mv = moves[i];
      if (mv) {
        btn.style.display = '';
        btn.innerHTML = `${mv.name}<span class="move-type">${mv.type.toUpperCase()}</span><span class="move-pp">PP ${mv.pp}</span>`;
        btn.onclick = () => this.doAttack(i);
      } else {
        btn.style.display = 'none';
      }
    }

    document.getElementById('btn-catch').onclick = () => this.doCatch();
    document.getElementById('btn-run').onclick = () => this.doRun();
    document.getElementById('battle-log-text').textContent = `A wild ${battle.wildDef.name} appeared!`;

    this.showScreen('battle');
  },

  updateBattleUI(battle, log) {
    this.updateBattleHPs(battle);
    if (log) {
      let msg = '';
      if (log.type === 'playerAttack') {
        msg = log.damage ? `${battle.playerDef.name} used ${log.ability}! (${log.damage} dmg)` : `${battle.playerDef.name} used ${log.ability}! (healed ${log.heal})`;
      } else if (log.type === 'wildAttack') {
        msg = `${battle.wildDef.name} used ${log.ability}! (${log.damage} dmg)`;
        if (log.damage > 0) {
          document.getElementById('hit-flash').classList.remove('hidden');
          setTimeout(() => document.getElementById('hit-flash').classList.add('hidden'), 300);
        }
      } else if (log.type === 'catchFailed') {
        msg = log.message || 'It broke free!';
      }
      if (msg) document.getElementById('battle-log-text').textContent = msg;
    }
    if (battle.turn !== 'player') {
      this.setBattleInputs(false);
    } else {
      this.setBattleInputs(true);
    }
  },

  setBattleInputs(enabled) {
    ['move-0','move-1','move-2','move-3','btn-catch','btn-run'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.disabled = !enabled;
    });
  },

  updateBattleHPs(battle) {
    const wildPct  = Math.max(0, (battle.wildCurrentHp / battle.wildMaxHp) * 100);
    const playerPct = Math.max(0, (battle.playerCurrentHp / battle.playerMaxHp) * 100);
    document.getElementById('b-wild-hp-fill').style.width = wildPct + '%';
    document.getElementById('b-player-hp-fill').style.width = playerPct + '%';
    document.getElementById('b-wild-hp-text').textContent = `${battle.wildCurrentHp}/${battle.wildMaxHp}`;
    document.getElementById('b-player-hp-text').textContent = `${battle.playerCurrentHp}/${battle.playerMaxHp}`;
    if (wildPct < 25) document.getElementById('b-wild-hp-fill').style.background = 'linear-gradient(90deg,#FF1744,#FF6D00)';
  },

  doAttack(idx) {
    const b = State.currentBattle;
    if (!b || b.turn !== 'player') return;
    this.setBattleInputs(false);
    if (State.socket?.connected) {
      State.socket.emit('battleAttack', { battleId: b.id, abilityIndex: idx });
    } else {
      this.offlineAttack(idx);
    }
  },

  offlineAttack(idx) {
    const b = State.currentBattle;
    const ability = b.playerDef.abilities[idx];
    let dmg = 0, heal = 0;
    if (ability.power > 0) {
      dmg = Math.max(1, Math.floor((ability.power * b.playerDef.baseAtk / b.wildDef.baseDef) * (0.85 + Math.random()*.15)));
      b.wildCurrentHp = Math.max(0, b.wildCurrentHp - dmg);
    }
    if (ability.heal) { heal = ability.heal; b.playerCurrentHp = Math.min(b.playerMaxHp, b.playerCurrentHp + heal); }
    document.getElementById('battle-log-text').textContent = `${b.playerDef.name} used ${ability.name}! (${dmg} dmg)`;
    this.updateBattleHPs(b);
    if (b.wildCurrentHp <= 0) { this.handleBattleEnd({ result: 'playerWon', battle: b }); return; }

    setTimeout(() => {
      const wa = b.wildDef.abilities[Math.floor(Math.random() * b.wildDef.abilities.length)];
      let wdmg = 0;
      if (wa.power > 0) {
        wdmg = Math.max(1, Math.floor((wa.power * b.wildDef.baseAtk / b.playerDef.baseDef) * (0.85 + Math.random()*.15)));
        b.playerCurrentHp = Math.max(0, b.playerCurrentHp - wdmg);
      }
      document.getElementById('battle-log-text').textContent = `${b.wildDef.name} used ${wa.name}! (${wdmg} dmg)`;
      if (wdmg > 0) {
        document.getElementById('hit-flash').classList.remove('hidden');
        setTimeout(() => document.getElementById('hit-flash').classList.add('hidden'), 300);
      }
      this.updateBattleHPs(b);
      if (b.playerCurrentHp <= 0) { this.handleBattleEnd({ result: 'wildWon', battle: b }); return; }
      this.setBattleInputs(true);
    }, 1200);
  },

  doCatch() {
    const b = State.currentBattle;
    if (!b) return;
    this.setBattleInputs(false);
    document.getElementById('battle-log-text').textContent = 'Throwing capture orb...';
    if (State.socket?.connected) {
      State.socket.emit('battleCatch', { battleId: b.id });
    } else {
      setTimeout(() => this.offlineCatch(), 800);
    }
  },

  offlineCatch() {
    const b = State.currentBattle;
    const hpRatio = b.wildCurrentHp / b.wildMaxHp;
    const rate = (this.getDef(b.wildDef.id).catchRate || 0.15) * (2 - hpRatio);
    if (Math.random() < rate) {
      const caught = { id: 'off_' + Date.now(), defId: b.wildDef.id, level: b.wildLevel, caughtAt: Date.now() };
      State.player.collection.push(caught);
      State.worldCreatures = State.worldCreatures.filter(c => c.id !== b.wildCreatureId);
      const m = State.creatureMarkers.get(b.wildCreatureId);
      if (m) { m.remove(); State.creatureMarkers.delete(b.wildCreatureId); }
      this.saveLocalCollection();
      this.handleBattleEnd({ result: 'caught', caught, xpGained: b.wildDef.xpReward || 100, playerLevel: State.player.level });
    } else {
      this.shakeEl(document.getElementById('b-wild-svg'));
      document.getElementById('battle-log-text').textContent = `${b.wildDef.name} broke free!`;
      this.toast('It broke free! 💨');
      setTimeout(() => this.setBattleInputs(true), 600);
    }
  },

  doRun() {
    const b = State.currentBattle;
    if (State.socket?.connected && b) State.socket.emit('battleRun', { battleId: b.id });
    this.handleBattleEnd({ result: 'fled' });
  },

  handleBattleEnd(data) {
    State.currentBattle = null;
    const { result, caught, xpGained, battle } = data;
    if (result === 'caught') {
      const def = this.getDef(caught.defId);
      if (State.player) {
        if (!State.player.collection.find(c => c.id === caught.id)) {
          State.player.collection.push(caught);
        }
        if (xpGained) State.player.xp = (State.player.xp || 0) + xpGained;
        if (data.playerLevel) State.player.level = data.playerLevel;
      }
      this.saveLocalCollection();
      this.showModal('✨', `${def.name} Caught!`, `${def.name} was added to your collection!\n+${xpGained} XP`);
      this.updateHUD();
    } else if (result === 'playerWon') {
      const xp = Math.floor((battle?.wildDef?.xpReward || 100) * 0.5);
      if (State.player) State.player.xp = (State.player.xp || 0) + xp;
      this.showModal('⚔️', 'Victory!', `You defeated the wild ${battle?.wildDef?.name}!\n+${xp} XP`);
      this.updateHUD();
    } else if (result === 'wildWon') {
      this.showModal('💀', 'Defeated!', 'Your creature fainted... better luck next time!');
    } else if (result === 'fled') {
      this.showScreen('map');
    }
  },

  // ── HUD ────────────────────────────────────────────────────────────────────
  updateHUD() {
    const p = State.player;
    if (!p) return;
    document.getElementById('tb-name').textContent = p.username;
    document.getElementById('tb-level').textContent = `Lv.${p.level}`;
    const xpForNext = (p.level) * (p.level) * 100;
    const xpPct = Math.min(100, (p.xp / xpForNext) * 100);
    document.getElementById('tb-xp').style.width = xpPct + '%';
    document.getElementById('tb-xp-label').textContent = `${p.xp} XP`;
    document.getElementById('stat-level').textContent = p.level;
    document.getElementById('stat-xp').textContent = p.xp;
    document.getElementById('stat-caught').textContent = p.collection?.length || 0;
    const unique = new Set(p.collection?.map(c => c.defId) || []).size;
    document.getElementById('stat-unique').textContent = unique;
    const titles = ['Novice Hunter','Apprentice','Tracker','Hunter','Expert','Master','Champion','Legend'];
    document.getElementById('prof-title').textContent = titles[Math.min(p.level - 1, titles.length - 1)] || 'Legend';
  },

  // ── Screens ────────────────────────────────────────────────────────────────
  showScreen(name) {
    const screens = { splash: 'screen-splash', map: 'screen-map', encounter: 'screen-encounter', battle: 'screen-battle', collection: 'screen-collection', profile: 'screen-profile' };
    Object.entries(screens).forEach(([k, id]) => {
      const el = document.getElementById(id);
      if (k === name) { el.classList.remove('hidden'); el.classList.add('active'); }
      else            { el.classList.remove('active'); el.classList.add('hidden'); }
    });
    State.currentScreen = name;
    if (name === 'collection') this.renderCollection();
    if (name === 'profile')    this.renderProfile();
    if (name === 'map' && State.map) setTimeout(() => State.map.invalidateSize(), 100);
  },

  renderCollection() {
    const grid = document.getElementById('collection-grid');
    const empty = document.getElementById('coll-empty');
    const coll = State.player?.collection || [];
    document.getElementById('coll-count').textContent = `${new Set(coll.map(c=>c.defId)).size} / ${State.creatureDefs.length}`;
    if (!coll.length) { empty.style.display = 'flex'; grid.innerHTML = ''; grid.appendChild(empty); return; }
    empty.style.display = 'none';
    grid.innerHTML = coll.map(c => {
      const def = this.getDef(c.defId);
      return `<div class="coll-card" style="--card-glow:${def.colors?.primary||'#888'}">
        <div class="coll-card-svg">${CREATURE_SVGS[def.id] || CREATURE_SVGS.terrakor}</div>
        <div class="coll-card-name">${def.name}</div>
        <div class="coll-card-info">
          <span class="coll-card-level">Lv.${c.level}</span>
          <span class="coll-card-type type-${def.type}">${def.type}</span>
        </div>
      </div>`;
    }).join('');
  },

  renderProfile() {
    const p = State.player;
    if (!p) return;
    document.getElementById('prof-name').textContent = p.username;
    this.updateHUD();
    const grid = document.getElementById('nexadex-grid');
    const caughtIds = new Set(p.collection?.map(c => c.defId) || []);
    grid.innerHTML = State.creatureDefs.map(def => {
      const have = caughtIds.has(def.id);
      return `<div class="ndex-card ${have ? '' : 'locked'}">
        <div class="ndex-svg">${CREATURE_SVGS[def.id] || CREATURE_SVGS.terrakor}</div>
        <div class="ndex-name">${def.name}</div>
      </div>`;
    }).join('');
  },

  // ── Modal / Toast ──────────────────────────────────────────────────────────
  showModal(icon, title, body) {
    document.getElementById('modal-icon').textContent = icon;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-body').textContent = body;
    document.getElementById('modal').classList.remove('hidden');
    document.getElementById('modal').classList.add('active');
  },

  closeModal() {
    document.getElementById('modal').classList.add('hidden');
    document.getElementById('modal').classList.remove('active');
    if (State.currentScreen === 'battle') this.showScreen('map');
  },

  toast(msg, duration = 2500) {
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    document.getElementById('toast-container').appendChild(t);
    setTimeout(() => t.remove(), duration);
  },

  shakeEl(el) { if (!el) return; el.classList.add('shake'); setTimeout(() => el.classList.remove('shake'), 600); }
};

// ─── BOOT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => Game.init());
