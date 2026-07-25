/**
 * Central Template Registry
 * -------------------------
 * The single source of truth for the marketplace, editor, and renderer.
 */

import AuroraSampleTemplate from "@/templates/aurora-sample/AuroraSampleTemplate";
import auroraSampleConfig from "@/templates/aurora-sample/template.config";

// Sunset Love Template Import
import SunsetLoveTemplate from "../templates/sunset-love/SunsetLoveTemplate";

export const templateRegistry = {
  [auroraSampleConfig.slug]: {
    component: AuroraSampleTemplate,
    config: auroraSampleConfig,
  },

  // Sunset Love Entry (Ultra-Luxury & Fully Populated Demo Data)
  "sunset-love": {
    component: SunsetLoveTemplate,
    comingSoon: false,
    config: {
      id: "sunset-love",
      slug: "sunset-love",
      name: "Sunset Love",
      category: "Romantic",
      tier: "Premium",
      price: 1999,
      currency: "INR",
      description:
        "An ultra-luxury, golden-hour romantic website experience featuring large tiltable Polaroid cards, interactive love letters, customizable ambient music, and intimate notes.",
      coverImage:
        "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1600&q=80",
      features: [
        "Golden Hour Ambient Glow",
        "HD Tilt Polaroid Gallery",
        "Interactive Love Letter",
        "Custom Audio Track Link",
        "Romantic Memory Timeline",
      ],
      editableSchema: [
        { key: "bgMusicUrl", label: "Background Music URL (MP3 Link)", type: "text", defaultValue: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3" },
        { key: "heroBadge", label: "Collection Badge", type: "text", defaultValue: "✨ SUNSET LOVE COLLECTION" },
        { key: "heroTitle", label: "Hero Title", type: "text", defaultValue: "Our Love Story Under the Golden Sunset" },
        { key: "coupleNames", label: "Couple Names", type: "text", defaultValue: "Alex & Sam" },
        { key: "quote", label: "Romantic Subtitle / Quote", type: "textarea", defaultValue: "“In every universe, in every lifetime, I would still find you and choose you.”" },
        { key: "card1Image", label: "Polaroid 1 Photo URL", type: "text", defaultValue: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=80" },
        { key: "card1Title", label: "Polaroid 1 Title", type: "text", defaultValue: "Our First Sunset Walk 🌅" },
        { key: "card1Caption", label: "Polaroid 1 Memory Caption", type: "text", defaultValue: "Golden hour, soft breeze, and endless conversations." },
        { key: "card2Image", label: "Polaroid 2 Photo URL", type: "text", defaultValue: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80" },
        { key: "card2Title", label: "Polaroid 2 Title", type: "text", defaultValue: "Caramel Latte & Smiles ☕" },
        { key: "card2Caption", label: "Polaroid 2 Memory Caption", type: "text", defaultValue: "That cute little coffee place on a rainy afternoon." },
        { key: "card3Image", label: "Polaroid 3 Photo URL", type: "text", defaultValue: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&w=1200&q=80" },
        { key: "card3Title", label: "Polaroid 3 Title", type: "text", defaultValue: "Under the Starry Night ✨" },
        { key: "card3Caption", label: "Polaroid 3 Memory Caption", type: "text", defaultValue: "Promises made when the world went quiet." },
        { key: "letterTitle", label: "Love Letter Title", type: "text", defaultValue: "A Letter From My Heart 💌" },
        { key: "letterMessage", label: "Full Love Letter Content", type: "textarea", defaultValue: "My Dearest,\n\nFrom the moment you stepped into my life, everything felt brighter—like warm golden sunlight after a long winter. Thank you for the laughs, the quiet comforting silences, and for loving me so effortlessly.\n\nYours Always." },
        { key: "loveNote1", label: "Romantic Note 1", type: "text", defaultValue: "You make every single day feel like golden hour. 🌄" },
        { key: "loveNote2", label: "Romantic Note 2", type: "text", defaultValue: "My favorite place in the world is right beside you. 💖" },
        { key: "loveNote3", label: "Romantic Note 3", type: "text", defaultValue: "Forever is just the beginning of our story. ✨" }
      ],
      demoData: {
        bgMusicUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3",
        heroBadge: "✨ SUNSET LOVE COLLECTION",
        heroTitle: "Our Love Story Under the Golden Sunset",
        coupleNames: "Alex & Sam",
        quote: "“In every universe, in every lifetime, I would still find you and choose you.”",
        card1Image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=80",
        card1Title: "Our First Sunset Walk 🌅",
        card1Caption: "Golden hour, soft breeze, and endless conversations.",
        card2Image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
        card2Title: "Caramel Latte & Smiles ☕",
        card2Caption: "That cute little coffee place on a rainy afternoon.",
        card3Image: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&w=1200&q=80",
        card3Title: "Under the Starry Night ✨",
        card3Caption: "Promises made when the world went quiet.",
        letterTitle: "A Letter From My Heart 💌",
        letterMessage: "My Dearest,\n\nFrom the moment you stepped into my life, everything felt brighter—like warm golden sunlight after a long winter. Thank you for the laughs, the quiet comforting silences, and for loving me so effortlessly.\n\nYours Always.",
        loveNote1: "You make every single day feel like golden hour. 🌄",
        loveNote2: "My favorite place in the world is right beside you. 💖",
        loveNote3: "Forever is just the beginning of our story. ✨"
      },
    },
  },

  "midnight-love": {
    component: null,
    comingSoon: true,
    config: {
      id: "midnight-love",
      slug: "midnight-love",
      name: "Midnight Love",
      category: "Romantic",
      tier: "Luxury",
      price: 3499,
      currency: "INR",
      description:
        "A deeply personal midnight-themed romantic experience with love notes, memory gallery, reasons, open-when messages, virtual hug, music, and a handwritten love letter.",
      coverImage:
        "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&w=1600&q=80",
      features: [
        "Love notes",
        "Memory gallery",
        "Reasons I love you",
        "Open when messages",
        "Music",
        "Love letter",
      ],
      editableSchema: [],
      demoData: {},
    },
  },
  "royal-love": {
    component: null,
    comingSoon: true,
    config: {
      id: "royal-love",
      slug: "royal-love",
      name: "Royal Love",
      category: "Romantic",
      tier: "Luxury",
      price: 3499,
      currency: "INR",
      description:
        "A regal, gold-and-burgundy love story with couple gallery, relationship timeline, a royal letter, and quotes.",
      coverImage:
        "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1600&q=80",
      features: ["Couple gallery", "Timeline", "Royal letter", "Quotes"],
      editableSchema: [],
      demoData: {},
    },
  },
  "soft-memories": {
    component: null,
    comingSoon: true,
    config: {
      id: "soft-memories",
      slug: "soft-memories",
      name: "Soft Memories",
      category: "Romantic",
      tier: "Basic",
      price: 999,
      currency: "INR",
      description:
        "A soft, polaroid-inspired keepsake — memory captions, relationship counter, and short notes.",
      coverImage:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=80",
      features: [
        "Polaroid gallery",
        "Memory captions",
        "Relationship counter",
        "Short notes",
      ],
      editableSchema: [],
      demoData: {},
    },
  },
};

export function getTemplate(slug) {
  return templateRegistry[slug] || null;
}

export function listTemplates() {
  return Object.values(templateRegistry);
}

export function listShippableTemplates() {
  return listTemplates().filter((t) => !!t.component && !t.comingSoon);
}