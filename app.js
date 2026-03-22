/* ═══════════════════════════════════════════════
   JUNGLE MIXTAPE // Y2K MIX PLAYER
   ═══════════════════════════════════════════════ */

// ─── MIX DATABASE ───
const MIXES = [
  { id: "ipXkxgyFIjQ", title: "Late 90s Atmospheric Jungle Mix | Intelligent DnB", channel: "Vic^", genre: "INTELLIGENT DnB" },
  { id: "YiMz2Vkep7I", title: "Late 90s Atmospheric Jungle Selection | Intelligent DnB pt. 4", channel: "Vic^", genre: "ATMOSPHERIC" },
  { id: "NrYTrugg9sM", title: "Late 90s Intelligent Jungle Selection | Atmospheric DnB pt. 3", channel: "Vic^", genre: "INTELLIGENT DnB" },
  { id: "mW86mKg-M8Q", title: "Late 90s Atmospheric Jungle Selection | Intelligent DnB pt. 2", channel: "Vic^", genre: "ATMOSPHERIC" },
  { id: "h3yo9LoprPw", title: "The Hidden Gems of Intelligent Jungle", channel: "Vic^", genre: "JUNGLE" },
  { id: "N5rOh4Pps10", title: "The Hidden Gems of Ambient Drum and Bass", channel: "Vic^", genre: "AMBIENT DnB" },
  { id: "FH1QiKnTgUA", title: "The Hidden Gems of Atmospheric Drum and Bass", channel: "Vic^", genre: "ATMOSPHERIC" },
  { id: "Sein50n6c2k", title: "Late 90s Atmospheric Drum and Bass Selection | pt. 7", channel: "Vic^", genre: "ATMOSPHERIC" },
  { id: "utZpcAq0Y6s", title: "Late 90s Ambient Drum and Bass Collection | pt. 6", channel: "Vic^", genre: "AMBIENT DnB" },
  { id: "gsZiaNeD-Ms", title: "Late 90s Ambient & Atmospheric DnB Selection | pt. 5", channel: "Vic^", genre: "ATMOSPHERIC" },
  { id: "26pL0mcac8g", title: "Low Poly Breaks [DISC. 10] - Video Game Jungle & DnB Mix", channel: "Pizza Hotline", genre: "PSX JUNGLE" },
  { id: "_SL-j-FXZDY", title: "Pizza Hotline Producer Mix Vol. 1 - Y2K Atmospheric Jungle", channel: "Pizza Hotline", genre: "Y2K JUNGLE" },
  { id: "Fj12kacpXa8", title: "Pizza Hotline - DREAM SELECT | Full Album Visualizer", channel: "Pizza Hotline", genre: "PSX DnB" },
  { id: "ZBMlJDG54Jo", title: "2000's COLLECTION | Liquid DnB / Jungle Mix", channel: "Orion", genre: "LIQUID DnB" },
  { id: "NSLQxbgnHnQ", title: "DINO CRISIS | Liquid DnB / Jungle Mix", channel: "Orion", genre: "PSX JUNGLE" },
  { id: "mFv2EjVcnX0", title: "SPACE CHANNEL 5 | Liquid DnB / Jungle Mix", channel: "Orion", genre: "Y2K DnB" },
  { id: "J_nKLCxxZus", title: "AKIRA | Liquid DnB / Jungle Mix", channel: "Orion", genre: "LIQUID DnB" },
  { id: "hrSw3_ei98s", title: "DIGITAL CRAZE 2000 | Liquid DnB / Jungle Mix", channel: "Orion", genre: "Y2K DnB" },
  { id: "t9rBZdFGaWc", title: "PLAYSTATION 2 SAGA | Liquid DnB / Jungle Mix", channel: "Orion", genre: "PSX JUNGLE" },
  { id: "BYfv-HUJqPo", title: "XENOSAGA | Liquid DnB / Jungle Mix", channel: "Orion", genre: "LIQUID DnB" },
  { id: "PNTQlrx5r_I", title: "DOA2 HARD*CORE | Liquid DnB / Jungle Mix", channel: "Orion", genre: "PSX DnB" },
  { id: "X1Wuzwe6Vao", title: "NANAKO KAITAI | Liquid DnB / Jungle Mix", channel: "Orion", genre: "LIQUID DnB" },
  { id: "p5v2KNx3v1E", title: "DR-11 | Liquid DnB / Jungle Mix", channel: "Orion", genre: "Y2K DnB" },
  { id: "rS1jvyRGAns", title: "OLD PLAYSTATION 2 ADS | Liquid DnB / Jungle Mix", channel: "Orion", genre: "PSX DnB" },
  { id: "1E_Zn7jCVok", title: "PS2 PILLS | Liquid DnB / Jungle Mix", channel: "Orion", genre: "PSX DnB" },
  { id: "2TN6NV6KkG4", title: "EYE PAIN | Liquid DnB / Jungle Mix", channel: "Orion", genre: "Y2K DnB" },
  { id: "Owldd4hs7wQ", title: "PlayStation Jungle Mix 2 | Drum & Bass, Y2K, Liquid", channel: "Dopo Goto", genre: "PSX JUNGLE" },
  { id: "zUK0ivCc8Mk", title: "Late Night PSX: A Curated Breakbeat Experience", channel: "Dopo Goto", genre: "BREAKBEAT" },
  { id: "yb7tHvJ5VAM", title: "Hidden Gems: The 32-bit Breakbeat Revolution", channel: "Dopo Goto", genre: "BREAKBEAT" },
  { id: "B7cBUsz4WkY", title: "Jungle Fatigue Vol 4 (2024)", channel: "4AM Breaks", genre: "JUNGLE" },
  { id: "ugiugMgIiZw", title: "Jungle Fatigue Vol 3 (2023)", channel: "4AM Breaks", genre: "JUNGLE" },
  { id: "ZLUl3vkI5ZI", title: "Jungle Fatigue Vol 2 (2023)", channel: "4AM Breaks", genre: "JUNGLE" },
  { id: "qyl26GigiWI", title: "Planetary Drift Vol 01 - Atmospheric DnB Compilation", channel: "4AM Breaks", genre: "ATMOSPHERIC" },
  { id: "cSmIt5Gu9Sw", title: "Planetary Drift Vol 02 - Atmospheric DnB Compilation", channel: "4AM Breaks", genre: "ATMOSPHERIC" },
  { id: "WIH6WSaA6cQ", title: "Various Artists - Turning Over (Full Comp, 1996)", channel: "4AM Breaks", genre: "90s DnB" },
  { id: "QnAwfzWqJEI", title: "DAYDREAMS CARTRIDGE :: Atmospheric DnB & Jungle", channel: "arcologies", genre: "ATMOSPHERIC" },
  { id: "6nGITYREWF4", title: "VAPOR DRIVE :: Atmospheric DnB & Jungle", channel: "arcologies", genre: "ATMOSPHERIC" },
  { id: "A-i4_8YEBW8", title: "PARTICLE SHIFT :: Atmospheric DnB & Jungle", channel: "arcologies", genre: "ATMOSPHERIC" },
  { id: "8lLbyv1zzdk", title: "OMEGA - Atmospheric DnB/Jungle Mix To Pilot Your Mecha To", channel: "MICROMECHA", genre: "MECHA JUNGLE" },
  { id: "ffngeRTa5BI", title: "AS-1 - Atmospheric DnB/Jungle Mix To Pilot Your Mecha To", channel: "MICROMECHA", genre: "MECHA JUNGLE" },
  { id: "Ygk74kt2KJM", title: "SIDERA - Atmospheric DnB/Jungle Mix #2", channel: "MICROMECHA", genre: "ATMOSPHERIC" },
  { id: "5Ustr2Tvnfs", title: "dead or alive 6 | Y2K Nostalgic Futurism - Jungle Tech DnB", channel: "miin", genre: "Y2K JUNGLE" },
  { id: "crpQrJ6Cm0E", title: "green apple | Frutiger Aero Y2K Jungle Tech DnB", channel: "miin", genre: "FRUTIGER AERO" },
  { id: "M1g7mhLd-b4", title: "devil may cry | PS2 Y2K Jungle Tech DnB Mix", channel: "miin", genre: "PSX DnB" },
  { id: "BcoXWJobAFU", title: "velvet valentine - Atmospheric Liquid Jungle DnB Mix", channel: "miin", genre: "LIQUID DnB" },
  { id: "buObSdya7nY", title: "late night slice - Atmospheric Liquid Jungle DnB Mix", channel: "miin", genre: "LIQUID DnB" },
  { id: "oDWzsJZ8Zic", title: "3AM in night city - Atmospheric Liquid Jungle DnB Mix", channel: "miin", genre: "LIQUID DnB" },
  { id: "n8XRfm5_m3s", title: "fy_islands | Intelligent DnB / Jungle Mix", channel: "nook", genre: "INTELLIGENT DnB" },
  { id: "rzRI7p_zfhg", title: "fy_resort | Intelligent DnB / Jungle Mix", channel: "nook", genre: "INTELLIGENT DnB" },
  { id: "Rcl2MHqb81Q", title: "fy_hotel | An Intelligent DnB / Jungle Mix", channel: "nook", genre: "INTELLIGENT DnB" },
  { id: "_FhmIEnO9DQ", title: "fy_swimming_pool | Intelligent DnB / Jungle Compilation", channel: "nook", genre: "JUNGLE" },
  { id: "Bo6pTU1p3SM", title: "90s Style Jungle and Ambient DnB Mix - Session 5 - Low Poly", channel: "Mostly Hairless", genre: "LOW POLY DnB" },
  { id: "ycJwVYXPvhY", title: "90s Style Ambient Jungle Mix Vol. 4 - Low Poly DnB", channel: "Mostly Hairless", genre: "LOW POLY DnB" },
  { id: "XvYFMfw3YMI", title: "90s Style Ambient Jungle Mix Vol. 2 - Low Poly DnB", channel: "Mostly Hairless", genre: "LOW POLY DnB" },
  { id: "S5DfL9ZDj7Q", title: "Another Ambient Jungle Mix, 90s Style - Low Poly DnB", channel: "Mostly Hairless", genre: "LOW POLY DnB" },
  { id: "Nh9BrD3xIeU", title: "90s Style Ambient Jungle Mix - Low Poly DnB", channel: "Mostly Hairless", genre: "LOW POLY DnB" },
  { id: "O6yrf6gC4jA", title: "SPACEBALLS THE MIX - Ambient Jungle/DnB Mix", channel: "Zorrovian", genre: "AMBIENT JUNGLE" },
  { id: "Gky6mn22RT8", title: "I AM ZORRO - CLUB FIREWALKER - Ambient Jungle/DnB", channel: "Zorrovian", genre: "AMBIENT JUNGLE" },
  { id: "hgA0TKQeNI0", title: "ah shit, here we go again - Atmospheric DnB Mix", channel: "FIREWALKER", genre: "ATMOSPHERIC" },
  { id: "zxCJsBPezck", title: "PS1 Jazz Jungle Mix - Liquid D&B, PS2/N64, Atmospheric", channel: "Shredward", genre: "JAZZ JUNGLE" },
  { id: "7-qMHDl3ANc", title: "PS1 Atmospheric Jungle/Breakcore Mix - Low Poly Y2K", channel: "Shredward", genre: "PSX BREAKCORE" },
  { id: "UppOVgAua8M", title: "Atmospheric/Ambient Jungle Mix - PS1/N64 Low Poly Ethereal", channel: "Shredward", genre: "ETHEREAL DnB" },
  { id: "EbPHZZ1i6to", title: "Atmospheric Jungle & D&B Mix - Low Poly PS1 Breakcore", channel: "Shredward", genre: "PSX BREAKCORE" },
  { id: "Izd1oYIbfbg", title: "PS1 Liquid D&B Mix - Jazzy D&B, Atmospheric, Jungle, Y2K", channel: "Shredward", genre: "JAZZ DnB" },
  { id: "ZrkHDrln4yE", title: "A Terrible Fate - PS2/N64 Jungle & Breakcore Mix", channel: "Shredward", genre: "BREAKCORE" },
  { id: "g5u1eecyksc", title: "Hardcore Revival - UK Rave, Hardcore & Oldskool Jungle Mix", channel: "Shredward", genre: "HARDCORE" },
  { id: "JMFblQ5Hph4", title: "atmospheric jungle for getting lost in nostalgia", channel: "Shredward", genre: "ATMOSPHERIC" },
  { id: "I1ETgb9q7XM", title: "Underrated Breakcore/Jungle DNB Tracks | MEGAMIX VOL.21", channel: "neuronist", genre: "BREAKCORE" },
  { id: "DbpJfZLo9Zw", title: "Neuronist Radio 2025 | Jungle/Breakcore/Electronic", channel: "neuronist", genre: "JUNGLE" },
  { id: "z9e8CPULjW4", title: "Heaven/EXE - Jungle/Breakcore/DnB/Dreamcast/PSX", channel: "Dusqk", genre: "PSX JUNGLE" },
  { id: "AjXgkucvZtM", title: "PS1 Jungle Mix | Low Poly Drum & Bass VGM", channel: "Burst Error", genre: "PSX JUNGLE" },
];

// ─── VISUAL CLIPS ───
// Pure dynamic gameplay & anime action. No static, no DJ gear, no text, no menus.
// Only Y2K era: PS1, PS2, N64, Dreamcast, GameCube, Xbox.
const VIZ_CLIPS = [
  // PS1
  { id: "CSXRLPCOeC4", seekPoints: [120, 600, 1200, 2000, 3000] },       // Crash Bandicoot
  { id: "uGMtZ8GvqR8", seekPoints: [180, 800, 2000, 4000, 8000] },       // Crash Bandicoot: Warped
  { id: "HskVownuOKg", seekPoints: [120, 600, 1200, 2400, 3600] },       // Wipeout 2097 racing
  { id: "cnjie2G7_gQ", seekPoints: [60, 300, 800, 1600, 2400] },         // Ridge Racer Type 4
  { id: "LrW6fRjjedw", seekPoints: [300, 1200, 3000, 6000, 9000] },      // Dino Crisis
  { id: "nBnttA00VTk", seekPoints: [300, 1200, 3600, 7200, 14400] },     // Final Fantasy VII (PSX Longplay)
  { id: "7zvBL65N0z4", seekPoints: [200, 1000, 3000, 6000, 10000] },     // Spyro the Dragon
  { id: "wn5DYc_gdxA", seekPoints: [60, 300, 900, 2400, 5000] },         // Tekken 3
  { id: "XCdWObJDpcs", seekPoints: [300, 1500, 4000, 8000, 15000] },     // Ape Escape
  // Dreamcast
  { id: "kqwGRMGBCqc", seekPoints: [200, 1200, 3600, 7200, 14000] },     // Sonic Adventure
  { id: "9kYS4fraTfQ", seekPoints: [180, 1000, 3000, 6000, 10000] },     // Sonic Adventure 2
  { id: "79TOQ-bVidM", seekPoints: [120, 600, 1800, 3600, 5400] },       // Jet Set Radio
  // N64
  { id: "H0WXsRkAEvI", seekPoints: [120, 1200, 3600, 7200, 12000] },    // Super Mario 64
  { id: "GhQp8le67Xo", seekPoints: [100, 600, 1800, 4000, 7000] },      // Star Fox 64
  { id: "DTQeEzG0tSc", seekPoints: [60, 400, 1200, 2400, 4000] },       // F-Zero X
  // GameCube
  { id: "sn4e91CqFuM", seekPoints: [300, 2000, 5000, 10000, 15000] },   // Metroid Prime
  // Xbox
  { id: "GPGnh_zK1ew", seekPoints: [200, 1200, 3600, 7200, 14000] },    // Halo: Combat Evolved
  // PS2
  { id: "NMXe6pxlPN8", seekPoints: [120, 600, 1800, 3600, 5400] },      // ONI (PS2 capture)
  // PC (Y2K era)
  { id: "DswRbPkHTHg", seekPoints: [300, 2000, 5000, 10000, 18000] },   // System Shock 2 (4:3 longplay)
  { id: "hK44IIhzHBw", seekPoints: [30, 180, 500, 900, 1400] },         // Unreal Tournament deathmatch
  // PS1 (via PS5 Classic - same game)
  { id: "LI6I3X1yKq8", seekPoints: [120, 600, 1800, 3600, 5400] },     // Twisted Metal - vehicular combat
  { id: "eS0i7mWm4Dw", seekPoints: [120, 800, 2000, 4000, 6000] },     // Twisted Metal 2 - destruction
  // PS2
  { id: "lB3pQGPkOXM", seekPoints: [300, 1800, 5000, 10000, 18000] },  // Resident Evil Code Veronica X
  // Tony Hawk (PS1/PS2)
  { id: "H4B7JkrIB0g", seekPoints: [900, 1200, 1500, 1800, 2100] },    // Tony Hawk
  { id: "at1DOrF5jvY", seekPoints: [900, 1200, 1500, 1800, 2100] },    // Tony Hawk
  { id: "CWcWl9qQHSk", seekPoints: [900, 1200, 1500, 1800, 2100] },   // Tony Hawk
  { id: "b5v7NLT5fS0", seekPoints: [900, 1200, 1500, 1800, 2100] },   // Tony Hawk
  // Anime (Y2K era)
  { id: "9OpqykXpm30", seekPoints: [30, 120, 300, 500, 700] },           // Evangelion angel battles
  { id: "yteSsb4_QTU", seekPoints: [120, 1200, 3600, 6000, 9000] },     // Pokemon anime battles
];

// ─── STATE ───
let currentMixIndex = 0;
let mixQueue = [];
let player = null;
let playerReady = false;
let isPlaying = false;
let isDragging = false;
let isSeeking = false;
let pendingAutoplay = true;

// VHS viz player
let vizPlayer = null;
let vizPlayerReady = false;
let vizClipTimer = null;

// ─── BOOT SCREEN (BIOS style) ───
document.addEventListener('DOMContentLoaded', () => {
  const bootScreen = document.getElementById('boot-screen');
  const app = document.getElementById('app');

  // Animate BIOS lines sequentially
  const biosLines = bootScreen.querySelectorAll('.bios-line');
  biosLines.forEach((line, i) => {
    setTimeout(() => { line.style.opacity = '1'; }, 400 + i * 300);
  });

  // Click/tap/key dismisses boot and starts everything
  const enter = () => {
    bootScreen.style.transition = 'opacity 0.3s';
    bootScreen.style.opacity = '0';
    setTimeout(() => {
      bootScreen.style.display = 'none';
      app.style.display = 'block';
      initApp();
    }, 300);
    document.removeEventListener('click', enter);
    document.removeEventListener('keydown', enter);
    document.removeEventListener('touchstart', enter);
  };
  document.addEventListener('click', enter);
  document.addEventListener('keydown', enter);
  document.addEventListener('touchstart', enter);
});

// ─── INIT ───
function initApp() {
  initClock();
  initVisualizer();
  shuffleMixes();
  showNextMix();
  initSwipeGestures();
  initPlayerControls();
  initKeyboard();
  initMediaSession();
  initWindowDrag();
  loadYouTubeAPI();
}

// ─── KEYBOARD ───
function initKeyboard() {
  document.addEventListener('keydown', (e) => {
    switch (e.code) {
      case 'Space':
        e.preventDefault();
        document.getElementById('btn-play').click();
        break;
      case 'ArrowRight':
        if (e.shiftKey) loadMix(getCurrentMix());
        else if (playerReady && player && isPlaying) player.seekTo(player.getCurrentTime() + 30, true);
        break;
      case 'ArrowLeft':
        if (e.shiftKey) skipMix();
        else if (playerReady && player && isPlaying) player.seekTo(Math.max(0, player.getCurrentTime() - 30), true);
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (playerReady && player) { const v = Math.min(100, player.getVolume() + 5); player.setVolume(v); document.getElementById('volume').value = v; }
        break;
      case 'ArrowDown':
        e.preventDefault();
        if (playerReady && player) { const v = Math.max(0, player.getVolume() - 5); player.setVolume(v); document.getElementById('volume').value = v; }
        break;
    }
  });
}

// ─── MEDIA SESSION (MacBook media keys: F7/F8/F9/F10) ───
function initMediaSession() {
  if (!('mediaSession' in navigator)) return;
  navigator.mediaSession.metadata = new MediaMetadata({
    title: 'DREAMCAST RADIO',
    artist: 'Jungle Mixtape',
  });
  navigator.mediaSession.setActionHandler('play', () => {
    if (playerReady && player) player.playVideo();
  });
  navigator.mediaSession.setActionHandler('pause', () => {
    if (playerReady && player) player.pauseVideo();
  });
  navigator.mediaSession.setActionHandler('previoustrack', () => {
    if (playerReady && player && isPlaying) player.seekTo(Math.max(0, player.getCurrentTime() - 30), true);
  });
  navigator.mediaSession.setActionHandler('nexttrack', () => {
    loadMix(getCurrentMix());
  });
}

// ─── CLOCK ───
function initClock() {
  const el = document.getElementById('clock');
  const tick = () => { el.textContent = new Date().toLocaleTimeString('en-GB', { hour12: false }); };
  tick(); setInterval(tick, 1000);
}

// ─── MIX QUEUE ───
function shuffleMixes() {
  mixQueue = [...MIXES];
  for (let i = mixQueue.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [mixQueue[i], mixQueue[j]] = [mixQueue[j], mixQueue[i]]; }
  currentMixIndex = 0;
  renderQueue();
}

function getCurrentMix() { return mixQueue[currentMixIndex] || null; }

function showNextMix() {
  if (currentMixIndex >= mixQueue.length) shuffleMixes();
  const mix = getCurrentMix();
  if (!mix) return;
  const card = document.getElementById('mix-card');
  card.classList.remove('swipe-left', 'swipe-right');
  card.style.transform = ''; card.style.opacity = '1';
  document.getElementById('mix-thumbnail').src = `https://img.youtube.com/vi/${mix.id}/hqdefault.jpg`;
  document.getElementById('mix-title').textContent = mix.title;
  document.getElementById('mix-channel').textContent = mix.channel;
  document.getElementById('mix-genre').textContent = mix.genre;
  renderQueue();
}

function renderQueue() {
  const el = document.getElementById('mix-queue');
  el.innerHTML = '';
  mixQueue.slice(currentMixIndex + 1, currentMixIndex + 8).forEach((mix, i) => {
    const item = document.createElement('div');
    item.className = 'queue-item';
    item.innerHTML = `<img src="https://img.youtube.com/vi/${mix.id}/default.jpg" alt="">`;
    item.title = mix.title;
    item.addEventListener('click', () => { currentMixIndex = currentMixIndex + 1 + i; loadMix(getCurrentMix()); });
    el.appendChild(item);
  });
}

// ─── SWIPE ───
function initSwipeGestures() {
  const card = document.getElementById('mix-card');
  const leftInd = document.getElementById('swipe-left-indicator');
  const rightInd = document.getElementById('swipe-right-indicator');
  let startX = 0, offsetX = 0;

  const start = (x) => { isDragging = true; startX = x; card.classList.add('dragging'); };
  const move = (x) => {
    if (!isDragging) return;
    offsetX = x - startX;
    card.style.transform = `translateX(${offsetX}px) rotate(${offsetX * 0.05}deg)`;
    leftInd.style.opacity = offsetX < -50 ? Math.min(1, (Math.abs(offsetX) - 50) / 100) : 0;
    rightInd.style.opacity = offsetX > 50 ? Math.min(1, (offsetX - 50) / 100) : 0;
  };
  const end = () => {
    if (!isDragging) return;
    isDragging = false; card.classList.remove('dragging');
    leftInd.style.opacity = 0; rightInd.style.opacity = 0;
    if (offsetX < -100) skipMix(); else if (offsetX > 100) loadMix(getCurrentMix()); else card.style.transform = '';
    offsetX = 0;
  };

  card.addEventListener('mousedown', (e) => { e.preventDefault(); start(e.clientX); });
  document.addEventListener('mousemove', (e) => move(e.clientX));
  document.addEventListener('mouseup', end);
  card.addEventListener('touchstart', (e) => start(e.touches[0].clientX), { passive: true });
  document.addEventListener('touchmove', (e) => move(e.touches[0].clientX), { passive: true });
  document.addEventListener('touchend', end);

  document.getElementById('btn-skip').addEventListener('click', skipMix);
  document.getElementById('btn-load').addEventListener('click', () => loadMix(getCurrentMix()));
}

function skipMix() {
  document.getElementById('mix-card').classList.add('swipe-left');
  setTimeout(() => { currentMixIndex++; showNextMix(); }, 400);
}

function loadMix(mix) {
  if (!mix) return;
  pendingAutoplay = false;
  document.getElementById('mix-card').classList.add('swipe-right');
  document.getElementById('player-now-playing').textContent = mix.title;
  document.getElementById('status-text').textContent = `NOW PLAYING: ${mix.genre} // ${mix.channel}`;
  // Update media session for macOS media keys
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: mix.title,
      artist: mix.channel,
      album: 'DREAMCAST RADIO',
      artwork: [{ src: `https://img.youtube.com/vi/${mix.id}/hqdefault.jpg`, sizes: '480x360', type: 'image/jpeg' }]
    });
  }
  document.getElementById('marquee-text').textContent = `::::: ${mix.title} ::::: ${mix.channel} ::::: ${mix.genre} ::::: JUNGLE MIXTAPE Y2K ::::: `;
  if (playerReady && player) {
    player.loadVideoById({ videoId: mix.id, startSeconds: 0 });
    isPlaying = true;
    document.getElementById('btn-play').textContent = '\u23F8';
  }
  setTimeout(() => { currentMixIndex++; showNextMix(); }, 400);
}

// ─── YOUTUBE API ───
function loadYouTubeAPI() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(tag);
}

window.onYouTubeIframeAPIReady = () => {
  player = new YT.Player('yt-player', {
    height: '1', width: '1',
    playerVars: { autoplay: 1, controls: 0, disablekb: 1, fs: 0, modestbranding: 1, rel: 0 },
    events: {
      onReady: () => {
        playerReady = true;
        initVizPlayer();
        // Try autoplay first mix
        if (pendingAutoplay) {
          const mix = getCurrentMix();
          if (mix) loadMix(mix);
        }
      },
      onStateChange: (e) => {
        if (e.data === YT.PlayerState.PLAYING) {
          isPlaying = true;
          document.getElementById('btn-play').textContent = '\u23F8';
          startTimeUpdate();
        } else if (e.data === YT.PlayerState.PAUSED) {
          isPlaying = false;
          document.getElementById('btn-play').textContent = '\u25B6';
        } else if (e.data === YT.PlayerState.ENDED) {
          loadMix(getCurrentMix());
        }
      },
      onError: () => { setTimeout(() => loadMix(getCurrentMix()), 1000); }
    }
  });
};

// ─── VHS PLAYER ───
function initVizPlayer() {
  vizPlayer = new YT.Player('viz-yt-player', {
    width: '100%', height: '100%',
    playerVars: { autoplay: 0, controls: 0, disablekb: 1, fs: 0, modestbranding: 1, rel: 0, mute: 1, playsinline: 1 },
    events: {
      onReady: () => { vizPlayerReady = true; startVizVideo(); },
      onError: () => { loadNextVizClip(); },
      onStateChange: (e) => { if (e.data === YT.PlayerState.ENDED) loadNextVizClip(); }
    }
  });
}

function loadNextVizClip() {
  if (!vizPlayerReady || !vizPlayer) return;
  const clip = VIZ_CLIPS[Math.floor(Math.random() * VIZ_CLIPS.length)];
  const seek = clip.seekPoints[Math.floor(Math.random() * clip.seekPoints.length)];
  vizPlayer.loadVideoById({ videoId: clip.id, startSeconds: seek });
  vizPlayer.setPlaybackQuality('medium');
  vizPlayer.mute();
  clearTimeout(vizClipTimer);
  vizClipTimer = setTimeout(loadNextVizClip, 20000 + Math.random() * 20000);
}

function startVizVideo() {
  loadNextVizClip();
}

// ─── PLAYER CONTROLS ───
function initPlayerControls() {
  document.getElementById('btn-play').addEventListener('click', () => {
    if (!playerReady || !player) return;
    if (isPlaying) player.pauseVideo(); else player.playVideo();
  });
  document.getElementById('btn-stop').addEventListener('click', () => {
    if (!playerReady || !player) return;
    player.stopVideo(); isPlaying = false;
    document.getElementById('btn-play').textContent = '\u25B6';
    document.getElementById('player-time').textContent = '00:00 / 00:00';
    document.getElementById('timeline').value = 0;
    document.getElementById('timeline-fill').style.width = '0%';
  });
  document.getElementById('btn-prev').addEventListener('click', () => {
    if (currentMixIndex > 1) { currentMixIndex -= 2; loadMix(mixQueue[currentMixIndex]); }
  });
  document.getElementById('btn-next').addEventListener('click', () => loadMix(getCurrentMix()));

  const tl = document.getElementById('timeline');
  tl.addEventListener('mousedown', () => { isSeeking = true; });
  tl.addEventListener('input', () => {
    if (!playerReady || !player) return;
    const dur = player.getDuration() || 0;
    document.getElementById('timeline-fill').style.width = `${tl.value}%`;
    document.getElementById('player-time').textContent = `${fmt((tl.value / 100) * dur)} / ${fmt(dur)}`;
  });
  tl.addEventListener('change', () => {
    if (!playerReady || !player) return;
    player.seekTo((tl.value / 100) * (player.getDuration() || 0), true);
    isSeeking = false;
  });
  tl.addEventListener('mouseup', () => { isSeeking = false; });
  document.getElementById('volume').addEventListener('input', (e) => {
    if (playerReady && player) player.setVolume(e.target.value);
  });
}

function startTimeUpdate() {
  const update = () => {
    if (!playerReady || !player || typeof player.getCurrentTime !== 'function') return;
    if (!isSeeking) {
      const cur = player.getCurrentTime() || 0, dur = player.getDuration() || 0;
      const pct = dur > 0 ? (cur / dur) * 100 : 0;
      document.getElementById('player-time').textContent = `${fmt(cur)} / ${fmt(dur)}`;
      document.getElementById('timeline').value = pct;
      document.getElementById('timeline-fill').style.width = `${pct}%`;
    }
    if (isPlaying) requestAnimationFrame(update);
  };
  update();
}

function fmt(s) { return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(Math.floor(s % 60)).padStart(2, '0')}`; }

// ─── VISUALIZER (VHS overlay) ───
let vizCanvas, vizCtx;

function initVisualizer() {
  vizCanvas = document.getElementById('visualizer');
  vizCtx = vizCanvas.getContext('2d');
  vizCanvas.style.background = 'transparent';
  resizeViz();
  window.addEventListener('resize', resizeViz);
  // Click = next clip
  vizCanvas.addEventListener('click', () => loadNextVizClip());
  renderViz();
}

function resizeViz() {
  const rect = vizCanvas.parentElement.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  vizCanvas.width = rect.width * dpr;
  vizCanvas.height = rect.height * dpr;
  vizCtx.scale(dpr, dpr);
  vizCanvas.style.width = rect.width + 'px';
  vizCanvas.style.height = rect.height + 'px';
}

function renderViz() {
  const w = vizCanvas.width / (window.devicePixelRatio || 1);
  const h = vizCanvas.height / (window.devicePixelRatio || 1);
  const t = performance.now() / 1000;
  vizCtx.clearRect(0, 0, w, h);

  // Scanlines
  vizCtx.fillStyle = 'rgba(0,0,0,0.1)';
  for (let y = 0; y < h; y += 3) vizCtx.fillRect(0, y, w, 1);

  // REC
  vizCtx.font = '12px "VT323"';
  vizCtx.fillStyle = Math.sin(t * 3) > 0 ? 'rgba(255,30,30,0.7)' : 'rgba(255,30,30,0.2)';
  vizCtx.fillText('\u25CF REC', 10, 18);
  const d = new Date();
  vizCtx.fillStyle = 'rgba(255,255,255,0.4)';
  vizCtx.fillText(`${d.toLocaleDateString('en-GB')}  ${d.toLocaleTimeString('en-GB')}`, 60, 18);
  vizCtx.fillText('SP', w - 30, 18);

  // Glitch
  if (Math.random() < 0.03) {
    vizCtx.fillStyle = `rgba(255,255,255,${0.03 + Math.random() * 0.08})`;
    vizCtx.fillRect(0, Math.random() * h, w, 1 + Math.random() * 3);
  }
  // Tracking
  if (Math.random() < 0.006) {
    vizCtx.fillStyle = `rgba(0,255,255,${0.02 + Math.random() * 0.04})`;
    vizCtx.fillRect(0, Math.random() * h, w, 15 + Math.random() * 40);
  }
  // Vignette
  const vig = vizCtx.createRadialGradient(w/2, h/2, Math.min(w,h)*0.35, w/2, h/2, Math.max(w,h)*0.7);
  vig.addColorStop(0, 'rgba(0,0,0,0)'); vig.addColorStop(1, 'rgba(0,0,0,0.35)');
  vizCtx.fillStyle = vig; vizCtx.fillRect(0, 0, w, h);

  requestAnimationFrame(renderViz);
}

// ─── WINDOW DRAG ───
function initWindowDrag() {
  const win = document.querySelector('.main-window');
  const titleBar = win.querySelector('.title-bar');
  let dragX = 0, dragY = 0, startLeft = 0, startTop = 0, dragging = false;

  titleBar.style.cursor = 'move';

  titleBar.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('win-btn')) return;
    dragging = true;
    dragX = e.clientX;
    dragY = e.clientY;
    const rect = win.getBoundingClientRect();
    startLeft = rect.left;
    startTop = rect.top;
    win.style.transition = 'none';
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - dragX;
    const dy = e.clientY - dragY;
    win.style.left = (startLeft + dx) + 'px';
    win.style.top = (startTop + dy) + 'px';
    win.style.right = 'auto';
    win.style.bottom = 'auto';
    win.style.transform = 'none';
  });

  document.addEventListener('mouseup', () => {
    dragging = false;
  });
}
