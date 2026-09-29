
/* ==========================================================================
   SOUTHBOUND - INTERACTIVE GLASSY WEB APP JS
   ========================================================================== */

// 1. DATA DEFINITIONS
const beaches = [
  {
    id: "mirissa",
    name: "Mirissa Beach",
    category: "beach",
    area: "Matara District",
    image: "images/mirissa.jpg",
    tags: ["Whale watching", "Nightlife", "Swimming", "Sunset"],
    bestTime: "Dec – Mar",
    waveHeight: "1.2m - 1.8m",
    temp: "29°C Water",
    vibe: "Lively & Vibrant",
    desc: "The south coast's iconic golden curve — palm-fringed sands, vibrant beachfront cafes, and the world's premier blue whale watching hub.",
    hue: ["#00F2FE", "#4FACFE"]
  },
  {
    id: "hiriketiya",
    name: "Hiriketiya Bay",
    category: "beach",
    area: "Near Dikwella",
    image: "images/hiriketiya.jpg",
    tags: ["Surfing", "Yoga", "Trendy", "Cafes"],
    bestTime: "Nov – Apr",
    waveHeight: "1.5m - 2.2m",
    temp: "28°C Water",
    vibe: "Boho Surf Paradise",
    desc: "A stunning horseshoe bay nestled under dense coconut jungle. Famous for year-round left-point surf breaks and organic beach bars.",
    hue: ["#10B981", "#059669"]
  },
  {
    id: "tangalle",
    name: "Tangalle Coast",
    category: "beach",
    area: "Southern Tip",
    image: "images/tangalle.jpg",
    tags: ["Quiet", "Long walks", "Romantic", "Turtles"],
    bestTime: "Dec – Mar",
    waveHeight: "0.8m - 1.5m",
    temp: "28°C Water",
    vibe: "Serene & Unspoiled",
    desc: "Endless golden beaches stretching past wild headlands and secluded lagoons. Perfect for privacy, turtle nesting, and luxury beach villas.",
    hue: ["#38EF7D", "#11998E"]
  },
  {
    id: "unawatuna",
    name: "Unawatuna Bay",
    category: "beach",
    area: "Galle Suburbs",
    image: "images/unawatuna.jpg",
    tags: ["Snorkelling", "Easy access", "Family", "Calm"],
    bestTime: "Dec – Mar",
    waveHeight: "0.5m - 1.0m",
    temp: "29°C Water",
    vibe: "Calm Turquoise Lagoon",
    desc: "A reef-sheltered crescent bay 15 minutes from historic Galle Fort. Calm waters ideal for family swimming and reef snorkelling.",
    hue: ["#4FACFE", "#00F2FE"]
  },
  {
    id: "dikwella",
    name: "Dikwella Beach",
    category: "beach",
    area: "Dikwella",
    image: "images/dikwella.jpg",
    tags: ["Calm", "Uncrowded", "Swimming", "Sunset"],
    bestTime: "Dec – Mar",
    waveHeight: "0.6m - 1.2m",
    temp: "29°C Water",
    vibe: "Tranquil Haven",
    desc: "Hiriketiya's quieter twin beach. Expansive sandy bay with gentle rolling waves, perfect for tranquil dip and long sunset strolls.",
    hue: ["#FF758C", "#FF7EB3"]
  },
  {
    id: "weligama",
    name: "Weligama Bay",
    category: "beach",
    area: "Matara District",
    image: "images/weligama.jpg",
    tags: ["Learn to surf", "Wide bay", "Cafes", "Beginner"],
    bestTime: "Nov – Apr",
    waveHeight: "1.0m - 1.5m",
    temp: "28°C Water",
    vibe: "Surfer's Playground",
    desc: "A vast 2km sandy bay with soft sandy bottom waves, making it Sri Lanka's top destination for first-time surf lessons.",
    hue: ["#F59E0B", "#FBBF24"]
  },
  {
    id: "koggala",
    name: "Koggala Beach",
    category: "beach",
    area: "Near Galle",
    image: "images/koggala.jpg",
    tags: ["Boutique hotels", "Space", "Stilt fishing"],
    bestTime: "Dec – Mar",
    waveHeight: "1.2m - 1.8m",
    temp: "28°C Water",
    vibe: "Exclusive Retreat",
    desc: "Uncrowded stretch of golden shore home to luxury resorts, iconic stilt fishermen, and the nearby serene Koggala Lake.",
    hue: ["#10B981", "#3B82F6"]
  },
  {
    id: "hikkaduwa",
    name: "Hikkaduwa Reef",
    category: "beach",
    area: "North of Galle",
    image: "images/hikkaduwa.jpg",
    tags: ["Coral reef", "Bars", "Sea turtles", "Snorkelling"],
    bestTime: "Nov – Apr",
    waveHeight: "1.2m - 2.0m",
    temp: "29°C Water",
    vibe: "Energetic & Festive",
    desc: "Famous for its vibrant offshore marine sanctuary, giant sea turtles swimming in the shallows, and upbeat beachfront dining.",
    hue: ["#EC4899", "#8B5CF6"]
  }
];

const viewpoints = [
  {
    id: "coconut-tree-hill",
    name: "Coconut Tree Hill",
    category: "viewpoint",
    area: "Mirissa",
    image: "images/coconut-tree-hill.jpg",
    tags: ["Sunset", "Photo spot", "Clifftop"],
    bestTime: "5:30 PM Sunset",
    vibe: "Iconic Photography",
    desc: "A magical red-earth cliff topped with swaying palms pointing out into the Indian Ocean. The premier sunset spot on the coast.",
    hue: ["#FF758C", "#FF7EB3"]
  },
  {
    id: "parrot-rock",
    name: "Parrot Rock",
    category: "viewpoint",
    area: "Mirissa",
    image: "images/parrot-rock.jpg",
    tags: ["Tidal island", "360° view", "Sunrise"],
    bestTime: "Low Tide / Sunrise",
    vibe: "Adventure Island",
    desc: "A small rocky islet accessible via shallow water at low tide, offering panoramic views of Mirissa's dual crescents.",
    hue: ["#00F2FE", "#4FACFE"]
  },
  {
    id: "dalawella-rope-swing-wijaya-rock",
    name: "Dalawella Swing & Wijaya Rock",
    category: "viewpoint",
    area: "Unawatuna",
    image: "images/dalawella-rope-swing-wijaya-rock.jpg",
    tags: ["Rope swing", "Turtles", "Sunset"],
    bestTime: "Sunset",
    vibe: "Instagram Landmark",
    desc: "World-famous palm tree rope swing and natural barrier reef lagoon where sea turtles graze beside giant ocean boulders.",
    hue: ["#10B981", "#F59E0B"]
  },
  {
    id: "japanese-peace-pagoda-rumassala",
    name: "Japanese Peace Pagoda",
    category: "viewpoint",
    area: "Rumassala / Unawatuna",
    image: "images/japanese-peace-pagoda-rumassala.jpg",
    tags: ["Hilltop", "Panoramic", "Temples"],
    bestTime: "Golden Hour",
    vibe: "Peaceful & Sacred",
    desc: "Perched atop Rumassala Hill, this gleaming white stupa commands breathtaking vistas over Galle Harbor and the fort.",
    hue: ["#38EF7D", "#00F2FE"]
  },
  {
    id: "flag-rock-galle-fort",
    name: "Flag Rock Bastion",
    category: "viewpoint",
    area: "Galle Fort",
    image: "images/flag-rock-galle-fort.jpg",
    tags: ["Historic", "Sunset", "Diving cliffs"],
    bestTime: "5:45 PM Sunset",
    vibe: "UNESCO Heritage",
    desc: "The southernmost point of Galle Fort's Dutch ramparts where locals cliff-jump into waves as the sun sinks into the sea.",
    hue: ["#F59E0B", "#EF4444"]
  },
  {
    id: "weligama-bay-viewpoint",
    name: "Weligama Bay Heights",
    category: "viewpoint",
    area: "Weligama",
    image: "images/weligama-bay-viewpoint.jpg",
    tags: ["Wide bay", "Cafes", "Surf views"],
    bestTime: "Late Afternoon",
    vibe: "Scenic Overview",
    desc: "Clifftop lookouts overlooking Taprobane Island — Sri Lanka's only private island villa — and hundreds of surf dots below.",
    hue: ["#3B82F6", "#10B981"]
  },
  {
    id: "hiriketiya-headland",
    name: "Hiriketiya Cliff Headland",
    category: "viewpoint",
    area: "Hiriketiya",
    image: "images/hiriketiya-headland.jpg",
    tags: ["Surf views", "Cliff walk", "Golden hour"],
    bestTime: "Golden Hour",
    vibe: "Raw Jungle Cliff",
    desc: "Sensational bird's-eye vantage over the entire horseshoe surf break with waves crashing into ancient granite ledges.",
    hue: ["#10B981", "#059669"]
  },
  {
    id: "hummanaya-blowhole-cliff",
    name: "Hummanaya Blowhole",
    category: "viewpoint",
    area: "Kudawella / Dikwella",
    image: "images/hummanaya-blowhole-cliff.jpg",
    tags: ["Natural wonder", "Sea spray", "Blowhole"],
    bestTime: "Mid-Tide",
    vibe: "Dramatic Nature",
    desc: "The world's 2nd largest sea blowhole. Ocean swells force water blasts up to 25 meters high through a cleft in the rocks.",
    hue: ["#00F2FE", "#EC4899"]
  },
  {
    id: "goyambokka-viewpoint",
    name: "Goyambokka Headland",
    category: "viewpoint",
    area: "Tangalle",
    image: "images/goyambokka-viewpoint.jpg",
    tags: ["Secluded", "Coves", "Sunset"],
    bestTime: "Sunset",
    vibe: "Secret Hideaway",
    desc: "A lush headland dividing twin sapphire coves. Quiet, romantic, and framed by dramatic boulders and coconut groves.",
    hue: ["#8B5CF6", "#EC4899"]
  },
  {
    id: "dondra-head-lighthouse",
    name: "Dondra Head Lighthouse",
    category: "viewpoint",
    area: "Matara",
    image: "images/dondra-head-lighthouse.jpg",
    tags: ["Southernmost tip", "Lighthouse", "Ocean"],
    bestTime: "Sunset",
    vibe: "Edge of the World",
    desc: "Sri Lanka's tallest lighthouse (49m) standing at the island's southernmost tip — with nothing between here and Antarctica.",
    hue: ["#F59E0B", "#10B981"]
  }
];

// Direct Bus Hops from Kandy to every South Coast beach
const kandyHops = [
  { name: "Hikkaduwa", km: 190, car: "~4 hrs", bus: "~7 hrs", route: "Route 01 → Route 02", note: "Change at Colombo Bastian Mawatha Stand" },
  { name: "Unawatuna", km: 220, car: "~4h 30m", bus: "~7h 30m", route: "Route 01 → Route 02", note: "Short 5-min tuk-tuk from main junction" },
  { name: "Galle Fort", km: 215, car: "~4h 20m", bus: "~7h 15m", route: "Route 01 → Route 02", note: "Direct to Galle Central Bus Stand" },
  { name: "Koggala", km: 228, car: "~4h 40m", bus: "~7h 45m", route: "Route 01 → Route 02", note: "Stops right outside beach resorts" },
  { name: "Weligama", km: 232, car: "~4h 45m", bus: "~7h 45m", route: "Route 01 → Route 02", note: "Alight near Weligama Bus Stand" },
  { name: "Mirissa", km: 238, car: "~4h 50m", bus: "~8 hrs", route: "Route 01 → Route 02", note: "Drops at Mirissa Beach main stop" },
  { name: "Matara", km: 225, car: "~4h 30m", bus: "~7h 30m", route: "Route 01 → Route 02", note: "Matara Central Highway Terminal" },
  { name: "Dikwella", km: 235, car: "~4h 45m", bus: "~7h 45m", route: "Route 01 → Route 32", note: "Route 32 direct from Colombo to Dikwella" },
  { name: "Hiriketiya", km: 238, car: "~4h 50m", bus: "~7h 50m", route: "Route 01 → Route 32", note: "Alight at Dikwella, 5-min tuk-tuk to bay" },
  { name: "Tangalle", km: 222, car: "~4h 10m", bus: "~8 hrs", route: "Route 01 → Route 32", note: "Direct to Tangalle Town Stand" }
];

// Combine all items for easy querying
const allPlaces = [...beaches, ...viewpoints];

// 2. STATE MANAGEMENT
let activeCategory = "all";
let activeTag = "all";
let searchQuery = "";
let savedFavorites = JSON.parse(localStorage.getItem("southbound_wishlist") || "[]");
let isAudioPlaying = false;
let audioCtx = null;
let pinkNoiseNode = null;
let gainNode = null;
let lfoNode = null;

// 3. DOM ELEMENTS
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  renderShowcaseCards();
  renderKandyBusTable();
  setupFilterEvents();
  setupModalEvents();
  setupRoutePlanner();
  setupThemeSwitcher();
  setupAudioSynth();
  setupCursorGlow();
  setupTiltEffect();
  updateWishlistBadge();
}

// RENDER KANDY TO SOUTH COAST BUS TABLE
function renderKandyBusTable() {
  const container = document.getElementById("kandy-bus-body");
  if (!container) return;

  container.innerHTML = kandyHops.map((h) => {
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent("Kandy, Sri Lanka")}&destination=${encodeURIComponent(h.name + " Beach, Sri Lanka")}&travelmode=driving`;
    return `
      <tr>
        <td class="highlight-cell">Kandy → ${h.name}</td>
        <td>${h.km} km</td>
        <td>${h.car}</td>
        <td><strong>${h.bus}</strong></td>
        <td style="color: var(--accent-cyan); font-weight:700;">${h.route}</td>
        <td style="font-size:0.8rem; color:var(--text-muted);">${h.note}</td>
        <td>
          <a href="${mapsUrl}" target="_blank" rel="noopener" class="btn-glass" style="padding:4px 10px; font-size:0.75rem;">
            🗺️ Directions
          </a>
        </td>
      </tr>
    `;
  }).join("");
}

// RENDER SHOWCASE CARDS
function renderShowcaseCards() {
  const container = document.getElementById("showcase-grid");
  if (!container) return;

  const filtered = allPlaces.filter((place) => {
    // Category Filter
    if (activeCategory === "beaches" && place.category !== "beach") return false;
    if (activeCategory === "viewpoints" && place.category !== "viewpoint") return false;
    if (activeCategory === "wishlist" && !savedFavorites.includes(place.id)) return false;

    // Tag Filter
    if (activeTag !== "all" && !place.tags.some(t => t.toLowerCase() === activeTag.toLowerCase())) {
      return false;
    }

    // Search Query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const matchName = place.name.toLowerCase().includes(q);
      const matchArea = place.area.toLowerCase().includes(q);
      const matchTag = place.tags.some(t => t.toLowerCase().includes(q));
      if (!matchName && !matchArea && !matchTag) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);" class="glass-panel">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom:12px; opacity:0.5;"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <h3>No matching coastal destinations</h3>
        <p style="margin-top:6px; font-size:0.9rem;">Try selecting a different tag or clear your search input.</p>
      </div>`;
    return;
  }

  container.innerHTML = filtered.map((place) => createCardHTML(place)).join("");
  setupCardEvents();
}

function createCardHTML(place) {
  const isSaved = savedFavorites.includes(place.id);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name + ", Sri Lanka")}`;

  return `
    <div class="glass-card" data-id="${place.id}">
      <div class="card-media">
        <img src="${place.image}" alt="${place.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80'">
        <div class="card-media-overlay"></div>
        <div class="floating-badge">
          ${place.category === 'beach' ? '🏖️ Beach' : '🌅 Viewpoint'} · ${place.area}
        </div>
      </div>
      <div class="card-body">
        <div class="card-title-row">
          <h3>${place.name}</h3>
          <button class="btn-heart ${isSaved ? 'saved' : ''}" data-fav="${place.id}" title="Add to Wishlist">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </button>
        </div>
        <div class="card-tags">
          ${place.tags.map(t => `<span class="mini-tag">${t}</span>`).join("")}
        </div>
        <p class="card-desc">${place.desc}</p>
        <div class="card-footer">
          <span style="font-size: 0.8rem; color: var(--accent-cyan); font-weight: 600;">✨ Best: ${place.bestTime}</span>
          <div class="card-actions">
            <button class="btn-glass modal-trigger" data-id="${place.id}" style="padding: 6px 14px; font-size: 0.8rem;">
              Quick View
            </button>
            <a href="${mapsUrl}" target="_blank" rel="noopener" class="btn-glass btn-primary" style="padding: 6px 12px; font-size: 0.8rem;" title="Open in Google Maps">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s7-7.58 7-13A7 7 0 1 0 5 9c0 5.42 7 13 7 13Z"/><circle cx="12" cy="9" r="2.5"/></svg>
              Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// SETUP FILTER & SEARCH EVENTS
function setupFilterEvents() {
  // Tabs
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.dataset.category;
      renderShowcaseCards();
    });
  });

  // Tag Chips
  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      activeTag = chip.dataset.tag;
      renderShowcaseCards();
    });
  });

  // Search Input
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderShowcaseCards();
    });
  }
}

// CARD EVENTS (WISHLIST & MODAL)
function setupCardEvents() {
  // Wishlist toggle
  document.querySelectorAll(".btn-heart").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.dataset.fav;
      if (savedFavorites.includes(id)) {
        savedFavorites = savedFavorites.filter((item) => item !== id);
      } else {
        savedFavorites.push(id);
      }
      localStorage.setItem("southbound_wishlist", JSON.stringify(savedFavorites));
      updateWishlistBadge();
      renderShowcaseCards();
    });
  });

  // Modal triggers
  document.querySelectorAll(".modal-trigger").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      openDetailModal(id);
    });
  });
}

function updateWishlistBadge() {
  const badge = document.getElementById("wishlist-count");
  if (badge) {
    badge.textContent = savedFavorites.length;
  }
}

// DETAIL MODAL LIGHTBOX
function setupModalEvents() {
  const backdrop = document.getElementById("glass-modal-backdrop");
  const closeBtn = document.getElementById("modal-close-btn");

  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
  }

  if (backdrop) {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function openDetailModal(id) {
  const item = allPlaces.find((p) => p.id === id);
  if (!item) return;

  const backdrop = document.getElementById("glass-modal-backdrop");
  const content = document.getElementById("modal-content");
  if (!backdrop || !content) return;

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.name + ", Sri Lanka")}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent("Kandy, Sri Lanka")}&destination=${encodeURIComponent(item.name + ", Sri Lanka")}&travelmode=driving`;

  content.innerHTML = `
    <div class="modal-grid">
      <div class="modal-img-wrap">
        <img src="${item.image}" alt="${item.name}">
        <div class="floating-badge" style="top:12px; left:12px; right:auto;">
          ${item.vibe || 'Paradise Destination'}
        </div>
      </div>
      <div>
        <span class="area-badge" style="text-transform:uppercase; letter-spacing:1px; font-weight:700;">${item.category.toUpperCase()} • ${item.area}</span>
        <h2 style="font-size: 2rem; font-weight: 800; margin: 4px 0 12px; line-height: 1.1;">${item.name}</h2>
        <p style="color: var(--text-muted); line-height: 1.6; font-size: 0.95rem;">${item.desc}</p>

        <div class="modal-spec-list">
          <div class="spec-item">
            <div class="spec-lbl">Best Season / Hour</div>
            <div class="spec-val">${item.bestTime}</div>
          </div>
          <div class="spec-item">
            <div class="spec-lbl">${item.category === 'beach' ? 'Average Swell' : 'Vantage Point'}</div>
            <div class="spec-val">${item.waveHeight || 'Panoramic Cliff'}</div>
          </div>
          <div class="spec-item">
            <div class="spec-lbl">Sea Temp / Climate</div>
            <div class="spec-val">${item.temp || 'Tropical 28°C'}</div>
          </div>
          <div class="spec-item">
            <div class="spec-lbl">Atmosphere</div>
            <div class="spec-val">${item.vibe || 'Scenic'}</div>
          </div>
        </div>

        <div style="display:flex; gap:12px; margin-top: 24px; flex-wrap:wrap;">
          <a href="${directionsUrl}" target="_blank" rel="noopener" class="btn-glass btn-coral" style="flex:1; justify-center; text-align:center;">
            🚗 Directions from Kandy
          </a>
          <a href="${mapsUrl}" target="_blank" rel="noopener" class="btn-glass btn-primary" style="flex:1; justify-center; text-align:center;">
            🗺️ Open Google Maps
          </a>
        </div>
      </div>
    </div>
  `;

  backdrop.classList.add("open");
}

function closeModal() {
  const backdrop = document.getElementById("glass-modal-backdrop");
  if (backdrop) backdrop.classList.remove("open");
}

// 4. INTERACTIVE ROUTE CALCULATOR
const routeMatrix = {
  kandy: {
    mirissa: { km: 238, car: "4h 50m", bus: "8h 00m", busRoute: "Route 01 (Kandy→Colombo) + Route 02 (Colombo→Mirissa)", fare: "$8 - $12" },
    hiriketiya: { km: 238, car: "4h 50m", bus: "7h 50m", busRoute: "Route 01 (Kandy→Colombo) + Route 32 (Colombo→Dikwella)", fare: "$8 - $12" },
    tangalle: { km: 222, car: "4h 10m", bus: "8h 00m", busRoute: "Route 01 (Kandy→Colombo) + Route 32 (Colombo→Tangalle)", fare: "$7 - $11" },
    unawatuna: { km: 220, car: "4h 30m", bus: "7h 30m", busRoute: "Route 01 (Kandy→Colombo) + Route 02 (Colombo→Unawatuna)", fare: "$7 - $10" },
    dikwella: { km: 235, car: "4h 45m", bus: "7h 45m", busRoute: "Route 01 (Kandy→Colombo) + Route 32 (Colombo→Dikwella)", fare: "$8 - $12" },
    weligama: { km: 232, car: "4h 45m", bus: "7h 45m", busRoute: "Route 01 (Kandy→Colombo) + Route 02 (Colombo→Weligama)", fare: "$8 - $11" },
    koggala: { km: 228, car: "4h 40m", bus: "7h 45m", busRoute: "Route 01 (Kandy→Colombo) + Route 02 (Colombo→Koggala)", fare: "$8 - $11" },
    hikkaduwa: { km: 190, car: "4h 00m", bus: "7h 00m", busRoute: "Route 01 (Kandy→Colombo) + Route 02 (Colombo→Hikkaduwa)", fare: "$6 - $9" }
  },
  colombo: {
    mirissa: { km: 155, car: "2h 30m", bus: "3h 30m", busRoute: "Route 02 Southern Express Bus via E01 Highway", fare: "$4 - $6" },
    hiriketiya: { km: 180, car: "3h 00m", bus: "4h 15m", busRoute: "Route 32 Express Bus via Expressway", fare: "$5 - $7" },
    tangalle: { km: 195, car: "3h 15m", bus: "4h 30m", busRoute: "Route 32 Express Bus to Tangalle Stand", fare: "$5 - $8" },
    unawatuna: { km: 125, car: "2h 00m", bus: "2h 45m", busRoute: "Route 02 Express Bus to Galle + short Tuk-tuk", fare: "$3 - $5" },
    dikwella: { km: 175, car: "2h 50m", bus: "4h 00m", busRoute: "Route 32 Express Bus", fare: "$5 - $7" },
    weligama: { km: 145, car: "2h 20m", bus: "3h 15m", busRoute: "Route 02 Coastal Express", fare: "$4 - $6" },
    koggala: { km: 135, car: "2h 10m", bus: "3h 00m", busRoute: "Route 02 Highway Bus", fare: "$4 - $6" },
    hikkaduwa: { km: 100, car: "1h 45m", bus: "2h 15m", busRoute: "Route 02 Coastal Bus / Highway Express", fare: "$3 - $5" }
  },
  galle: {
    mirissa: { km: 32, car: "40 min", bus: "1h 00m", busRoute: "Route 02 Coastal Bus (every 15 min)", fare: "$1" },
    hiriketiya: { km: 65, car: "1h 20m", bus: "1h 50m", busRoute: "Route 32 Matara/Dikwella Bus", fare: "$2" },
    tangalle: { km: 78, car: "1h 40m", bus: "2h 15m", busRoute: "Route 32 Coastal Bus", fare: "$2" },
    unawatuna: { km: 6, car: "12 min", bus: "18 min", busRoute: "Local Tuk-Tuk or Route 02 Bus", fare: "$0.50" },
    dikwella: { km: 60, car: "1h 15m", bus: "1h 45m", busRoute: "Route 32 Bus", fare: "$1.80" },
    weligama: { km: 28, car: "35 min", bus: "45 min", busRoute: "Route 02 Local Bus", fare: "$1" },
    koggala: { km: 14, car: "20 min", bus: "25 min", busRoute: "Route 02 Local Bus", fare: "$0.60" },
    hikkaduwa: { km: 18, car: "25 min", bus: "35 min", busRoute: "Route 02 Northbound Bus", fare: "$0.70" }
  }
};

function setupRoutePlanner() {
  const originSelect = document.getElementById("origin-select");
  const destSelect = document.getElementById("dest-select");
  const updateBtn = document.getElementById("update-route-btn");

  if (!originSelect || !destSelect) return;

  function calculateRoute() {
    const origin = originSelect.value;
    const dest = destSelect.value;
    const resultsContainer = document.getElementById("route-results-container");

    const data = (routeMatrix[origin] && routeMatrix[origin][dest]) || {
      km: 180, car: "3h 30m", bus: "4h 30m", busRoute: "Coastal Highway Bus Link", fare: "$6 - $10"
    };

    const destObj = beaches.find(b => b.id === dest) || { name: dest.toUpperCase() };

    resultsContainer.innerHTML = `
      <div class="route-card-option">
        <div class="route-icon-box">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 17v-4h10v4"/><path d="M7 7h10"/></svg>
        </div>
        <div class="route-details" style="flex:1;">
          <h4>Express Private Taxi / Car <span class="tag-pill">FASTEST</span></h4>
          <p>Distance: <strong>${data.km} km</strong> via Southern Expressway (E01). Journey time: <strong>~${data.car}</strong>.</p>
          <div style="font-size:0.8rem; color: var(--accent-cyan); margin-top:4px;">Approx Taxi Fare: ${data.fare} • Door to Door</div>
        </div>
      </div>

      <div class="route-card-option">
        <div class="route-icon-box" style="border-color: rgba(255, 107, 107, 0.4); color: var(--accent-coral);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 6v6"/><path d="M16 6v6"/><path d="M2 12h20"/><path d="M18 18h2"/><path d="M4 18h2"/><rect x="4" y="3" width="16" height="15" rx="2"/></svg>
        </div>
        <div class="route-details" style="flex:1;">
          <h4>Coastal Express Bus <span class="tag-pill" style="background:var(--accent-coral); color:#fff;">CHEAPEST</span></h4>
          <p>${data.busRoute}. Total duration: <strong>~${data.bus}</strong>.</p>
          <div style="font-size:0.8rem; color: var(--text-muted); margin-top:4px;">No pre-booking required. Cash paid on board (~LKR 400 - 900).</div>
        </div>
      </div>

      <div class="route-card-option">
        <div class="route-icon-box" style="border-color: rgba(52, 211, 153, 0.4); color: var(--accent-emerald);">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>
        </div>
        <div class="route-details" style="flex:1;">
          <h4>Google Maps Live Directions</h4>
          <p>Get real-time turn-by-turn navigation with live traffic updates for ${destObj.name}.</p>
          <a href="https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin + ", Sri Lanka")}&destination=${encodeURIComponent(destObj.name + ", Sri Lanka")}&travelmode=driving" 
             target="_blank" rel="noopener" class="btn-glass btn-primary" style="display:inline-flex; margin-top:8px; padding:6px 14px; font-size:0.82rem;">
            Launch Maps Directions →
          </a>
        </div>
      </div>
    `;
  }

  if (originSelect && destSelect) {
    originSelect.addEventListener("change", calculateRoute);
    destSelect.addEventListener("change", calculateRoute);
    if (updateBtn) updateBtn.addEventListener("click", calculateRoute);
    calculateRoute();
  }
}

// 5. THEME SWITCHER
function setupThemeSwitcher() {
  const themeBtn = document.getElementById("theme-toggle-btn");
  const themes = ["cyan", "sunset", "emerald"];
  let currentIdx = 0;

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      currentIdx = (currentIdx + 1) % themes.length;
      const theme = themes[currentIdx];
      if (theme === "cyan") {
        document.documentElement.removeAttribute("data-theme");
      } else {
        document.documentElement.setAttribute("data-theme", theme);
      }
    });
  }
}

// 6. SYNTHESIZED WEB AUDIO OCEAN SOUND GENERATOR
function setupAudioSynth() {
  const toggleBtn = document.getElementById("audio-toggle-btn");
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    if (!audioCtx) {
      initAudioCtx();
    }
    if (isAudioPlaying) {
      stopOceanSound();
    } else {
      startOceanSound();
    }
  });
}

function initAudioCtx() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  audioCtx = new AudioContext();

  // Create Pink Noise buffer for realistic wave sound
  const bufferSize = audioCtx.sampleRate * 2;
  const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.96900 * b2 + white * 0.1538520;
    b3 = 0.86650 * b3 + white * 0.3104856;
    b4 = 0.55000 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.0168980;
    output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
    output[i] *= 0.11;
    b6 = white * 0.115926;
  }

  pinkNoiseNode = audioCtx.createBufferSource();
  pinkNoiseNode.buffer = noiseBuffer;
  pinkNoiseNode.loop = true;

  // Filter for deep ocean rumble modulation
  const filter = audioCtx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(350, audioCtx.currentTime);

  // LFO for wave swelling rhythm (every 4.5 seconds)
  lfoNode = audioCtx.createOscillator();
  lfoNode.frequency.setValueAtTime(0.22, audioCtx.currentTime);

  const lfoGain = audioCtx.createGain();
  lfoGain.gain.setValueAtTime(250, audioCtx.currentTime);

  lfoNode.connect(lfoGain);
  lfoGain.connect(filter.frequency);

  gainNode = audioCtx.createGain();
  gainNode.gain.setValueAtTime(0.12, audioCtx.currentTime);

  pinkNoiseNode.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  pinkNoiseNode.start(0);
  lfoNode.start(0);
}

function startOceanSound() {
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  isAudioPlaying = true;
  const toggleBtn = document.getElementById("audio-toggle-btn");
  if (toggleBtn) {
    toggleBtn.classList.add("audio-active");
    toggleBtn.style.borderColor = "var(--accent-cyan)";
  }
}

function stopOceanSound() {
  if (audioCtx) {
    audioCtx.suspend();
  }
  isAudioPlaying = false;
  const toggleBtn = document.getElementById("audio-toggle-btn");
  if (toggleBtn) {
    toggleBtn.classList.remove("audio-active");
    toggleBtn.style.borderColor = "";
  }
}

// 7. MOUSE CURSOR LIGHT GLOW
function setupCursorGlow() {
  const glow = document.getElementById("cursor-glow");
  if (!glow) return;

  window.addEventListener("mousemove", (e) => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  });
}

// 8. 3D TILT EFFECT ON CARDS
function setupTiltEffect() {
  document.addEventListener("mousemove", (e) => {
    const cards = document.querySelectorAll(".hero-glass-card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / rect.height) * 12;
      const rotateY = (x / rect.width) * 12;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  });
}
