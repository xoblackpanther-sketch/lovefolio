/**
 * Central Template Registry
 * -------------------------
 * The single source of truth for the marketplace, editor, and renderer.
 *
 * To register a new template:
 *   1. Create `src/templates/<slug>/` with:
 *        - <TemplateName>.jsx
 *        - template.config.js (must define editableSchema + demoData)
 *        - components/…
 *   2. Import both here and add a new entry to `templateRegistry`.
 *
 * Marketplace metadata is read directly from each entry's `config`.
 * `comingSoon: true` entries render as locked cards — no component required.
 */

import AuroraSampleTemplate from "@/templates/aurora-sample/AuroraSampleTemplate";
import auroraSampleConfig from "@/templates/aurora-sample/template.config";

// 1. Naya Sunset Love Template Import Karein
import SunsetLoveTemplate from "../templates/sunset-love/SunsetLoveTemplate";

export const templateRegistry = {
    [auroraSampleConfig.slug]: {
        component: AuroraSampleTemplate,
        config: auroraSampleConfig,
    },

    // 2. Naya Sunset Love Template Registry Entry (Shippable)
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
                "A warm, golden-hour aesthetic template with sunset vibes, polaroid memory cards, love notes, and romantic music background.",
            coverImage:
                "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1600&q=80",
            features: [
                "Golden hour theme",
                "Polaroid gallery",
                "Romantic music player",
                "Love notes",
            ],
            editableSchema: [],
            demoData: {},
        },
    },

    // Placeholder future templates. Clearly labelled as coming soon so the
    // marketplace can render them as locked previews without pretending they
    // are shippable.
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

/** Only templates that actually ship (have a component). */
export function listShippableTemplates() {
    return listTemplates().filter((t) => !!t.component && !t.comingSoon);
}