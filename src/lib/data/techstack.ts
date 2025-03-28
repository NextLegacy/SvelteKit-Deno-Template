import {
    Cloudflare,
    CopenhagenBook,
    Fontsource,
    GoogleCloudRun,
    JSONLD,
    Lighthouse,
    MiniSearch,
    Motion,
    Neon,
    Sharp,
    Svelte,
    Tailwind,
    ThreeJS,
    Threlte,
    TypeScript
} from "$lib/components/icons";

export const techStack = [
    {
        category: "Frontend",
        technologies: [
            {
                name: "Svelte 5",
                description: "Reactive UI framework with state-of-the-art reactivity",
                icon: Svelte,
                url: "https://svelte.dev/"
            },
            {
                name: "SvelteKit",
                description: "Full-stack framework built on Svelte",
                icon: Svelte,
                url: "https://kit.svelte.dev/"
            },
            {
                name: "TypeScript",
                description: "Type-safe JavaScript for better developer experience",
                icon: TypeScript,
                url: "https://www.typescriptlang.org/"
            },
            {
                name: "Tailwind CSS v4",
                description: "Utility-first CSS framework for rapid UI development",
                icon: Tailwind,
                url: "https://tailwindcss.com/"
            },
            {
                name: "Motion",
                description: "High-performance animation library for web interfaces",
                icon: Motion,
                url: "https://motion.dev/"
            },
            {
                name: "Three.js",
                description: "JavaScript 3D library for interactive web graphics",
                icon: ThreeJS,
                url: "https://threejs.org/"
            },
            {
                name: "Threlte",
                description: "Svelte components for Three.js",
                icon: Threlte,
                url: "https://threlte.xyz/"
            },
            {
                name: "Fontsource",
                description: "Self-hosted fonts for perfect typography",
                icon: Fontsource,
                url: "https://fontsource.org/"
            }
        ]
    },
    {
        category: "Backend",
        technologies: [
            {
                name: "Neon",
                description: "Serverless PostgreSQL for scalable database solutions",
                icon: Neon,
                url: "https://neon.tech/"
            },
            {
                name: "Google Cloud Run",
                description: "Fully managed serverless platform for containerized applications",
                icon: GoogleCloudRun,
                url: "https://cloud.google.com/run"
            },
            {
                name: "Cloudflare",
                description: "Fast & secure DNS, CDN, and DDoS protection",
                icon: Cloudflare,
                url: "https://www.cloudflare.com/"
            },
            {
                name: "The Copenhagen Book",
                description: "Modern authentication and authorization system",
                icon: CopenhagenBook,
                url: "https://github.com/EvitcaStudio/the-copenhagen-book"
            }
        ]
    },
    {
        category: "Optimization",
        technologies: [
            {
                name: "Sharp",
                description: "High-performance image processing",
                icon: Sharp,
                url: "https://sharp.pixelplumbing.com/"
            },
            {
                name: "Lighthouse",
                description: "Top scores for performance, accessibility, and SEO",
                icon: Lighthouse,
                url: "https://developer.chrome.com/docs/lighthouse/"
            },
            {
                name: "MiniSearch",
                description: "Lightweight, efficient full-text search engine",
                icon: MiniSearch,
                url: "https://github.com/lucaong/minisearch"
            },
            {
                name: "JSON-LD",
                description: "Structured data for enhanced SEO and rich results",
                icon: JSONLD,
                url: "https://json-ld.org/"
            }
        ]
    }
];
