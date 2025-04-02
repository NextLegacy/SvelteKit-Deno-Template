<script lang="ts">
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
    import ThreeDScene from "$lib/components/ThreeDScene.svelte";
    import { Canvas } from "@threlte/core";
    import { inView } from "motion";
    import { onMount } from "svelte";

    const techStack = [
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

    const metrics = [
        { name: "Performance", score: 100 },
        { name: "Accessibility", score: 100 },
        { name: "Best Practices", score: 100 },
        { name: "SEO", score: 100 }
    ];

    let metricsAnimated = $state(false);

    function animateMetricCircles() {
        const circles = document.querySelectorAll(".metric-circle");
        const scores = document.querySelectorAll(".metric-score");

        circles.forEach((circle, index) => {
            const radius = 45;
            const circumference = 2 * Math.PI * radius;

            circle.setAttribute("stroke-dasharray", "0 " + circumference.toString());

            setTimeout(() => {
                const scoreValue = metrics[index].score;
                const visibleLength = (scoreValue / 100) * circumference;
                const invisibleLength = circumference - visibleLength;
                circle.setAttribute("stroke-dasharray", visibleLength.toString() + " " + invisibleLength.toString());

                let currentScore = 0;
                const targetScore = scoreValue;
                const duration = 1500;
                const increment = 100 / (duration / 40);

                const scoreCounter = setInterval(() => {
                    currentScore += increment;
                    if (currentScore >= targetScore) {
                        currentScore = targetScore;
                        clearInterval(scoreCounter);
                    }
                    scores[index].textContent = Math.round(currentScore).toString();
                }, 16);
            }, index * 150);
        });

        metricsAnimated = true;
    }

    onMount(() => {
        const metricsSection = document.querySelector(".metrics-section");
        if (metricsSection) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting && !metricsAnimated) {
                            animateMetricCircles();
                        }
                    });
                },
                { threshold: 0.3 }
            );
            observer.observe(metricsSection);
        }

        document.querySelectorAll(".tech-category").forEach((element) => {
            inView(element as HTMLElement, () => {
                (element as HTMLElement).style.opacity = "1";
                (element as HTMLElement).style.transform = "translateY(0)";
            });
        });

        document.querySelectorAll(".tech-item").forEach((element, index) => {
            inView(element as HTMLElement, () => {
                setTimeout(
                    () => {
                        (element as HTMLElement).style.opacity = "1";
                        (element as HTMLElement).style.transform = "translateY(0)";
                    },
                    50 * (index % 8)
                );
            });
        });
    });
</script>

<section class="py-32">
    <div class="mb-20 text-center">
        <h2 class="text-primary-600 mb-6 text-3xl font-bold md:text-5xl">NextLegacy Tech Stack</h2>
        <p class="text-text-700 mx-auto max-w-2xl px-6 text-lg">
            A comprehensive modern web development stack optimized for performance, interactivity, and developer experience.
        </p>
    </div>

    <div class="mb-28 px-6">
        <div class="bg-background-300 border-primary-200/50 mx-auto max-w-4xl overflow-hidden rounded-2xl border shadow-lg">
            <Canvas>
                <ThreeDScene />
            </Canvas>
        </div>
    </div>

    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-3">
        {#each techStack as category, i}
            <div class="tech-category" style="opacity: 0; transform: translateY(30px); transition: opacity 0.5s ease-out, transform 0.5s ease-out;">
                <div class="mb-10 text-center">
                    <h3 class="text-primary-500 mb-4 text-2xl font-bold">{category.category}</h3>
                    <div class="bg-background-500 mx-auto h-1 w-16 rounded"></div>
                </div>

                <ul class="space-y-5">
                    {#each category.technologies as tech, j}
                        <li
                            class="tech-item bg-background-50/20 border-primary-200/30 hover:bg-background-50/40 rounded-xl border p-5 shadow-sm transition-all"
                            style="opacity: 0; transform: translateY(20px); transition: opacity 0.4s ease-out, transform 0.4s ease-out, background-color 0.3s ease;"
                        >
                            <a href={tech.url} target="_blank" rel="noopener noreferrer" class="group flex items-start">
                                <tech.icon class="text-primary-600 group-hover:text-primary-700 mt-1 mr-4 h-6 w-6 transition-colors" />
                                <div>
                                    <h4 class="text-text-900 group-hover:text-primary-700 flex items-center text-lg font-semibold transition-colors">
                                        {tech.name}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="ml-1.5 h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </h4>
                                    <p class="text-text-600 mt-1 text-sm">{tech.description}</p>
                                </div>
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>

    <div class="metrics-section mt-32 px-6">
        <div class="bg-background-50/20 border-primary-200/40 mx-auto max-w-4xl rounded-xl border p-10 shadow-lg">
            <h3 class="text-primary-600 mb-12 text-center text-2xl font-bold">Performance Metrics</h3>

            <div class="grid grid-cols-2 gap-10 md:grid-cols-4">
                {#each metrics as metric, i}
                    <div class="flex flex-col items-center">
                        <div class="relative mb-4 h-28 w-28">
                            <svg class="h-full w-full" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" stroke-width="8" />

                                <circle
                                    class="metric-circle text-primary-500 origin-center -rotate-90 transform"
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="8"
                                    stroke-linecap="round"
                                    stroke-dasharray="0 283"
                                    pathLength="100"
                                    style="transition: stroke-dasharray 1.5s ease-in-out"
                                />
                            </svg>

                            <div class="absolute top-0 left-0 flex h-full w-full items-center justify-center">
                                <span class="metric-score text-text-900 text-3xl font-bold"> 0 </span>
                            </div>
                        </div>
                        <span class="text-text-700 text-base font-medium">{metric.name}</span>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
