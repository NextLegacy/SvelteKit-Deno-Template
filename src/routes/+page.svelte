<script lang="ts">
    import ThreeDScene from "$lib/components/ThreeDScene.svelte";
    import { techStack } from "$lib/data/techstack";
    import { inViewNode } from "$lib/utils/motion.svelte";
    import { Canvas } from "@threlte/core";
    import { animate, stagger } from "motion";

    const metrics = [
        { name: "Performance", score: 100 },
        { name: "Accessibility", score: 100 },
        { name: "Best Practices", score: 100 },
        { name: "SEO", score: 100 }
    ];

    const animateMetricText = inViewNode((node, { i }: { i: number }) => {
        const currentScore = { value: 0 };

        animate(
            currentScore,
            { value: 100 },
            {
                duration: 1,
                delay: i * 0.2,
                onUpdate: () => {
                    node.textContent = Math.round(currentScore.value).toString();
                },
                ease: [0.4, 0, 0.2, 1]
            }
        );
    });

    const animateTechItem = inViewNode((node, { i, j }: { i: number; j: number }) => {
        animate(node, { opacity: [0, 1], y: [10, 0] }, { duration: 0.2, delay: stagger(0.1, { startDelay: 0.05 * j }), ease: [0.4, 0, 0.2, 1] });
    });

    const animateMetricCircle = inViewNode((node, { i }: { i: number }) => {
        const radius = 45;
        const circumference = 2 * Math.PI * radius;
        const scoreValue = metrics[i].score;
        const visibleLength = (scoreValue / 100) * circumference;
        const invisibleLength = circumference - visibleLength;

        animate(
            node,
            { strokeDasharray: [`0 ${circumference}`, `${visibleLength} ${invisibleLength}`] },
            { duration: 3.5, delay: i * 0.2, ease: [0.4, 0, 0.2, 1] }
        );
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
        <div class="border-primary-500 bg-background-100/50 mx-auto max-w-4xl overflow-hidden rounded-2xl border shadow-lg">
            <Canvas>
                <ThreeDScene />
            </Canvas>
        </div>
    </div>

    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-3">
        {#each techStack as category, i}
            <div>
                <div class="mb-10 text-center">
                    <h3 class="text-primary-500 mb-4 text-2xl font-bold">{category.category}</h3>
                    <div class="bg-background-500 mx-auto h-1 w-16 rounded"></div>
                </div>

                <ul class="test space-y-5">
                    {#each category.technologies as tech, j}
                        <li
                            use:animateTechItem={{ i, j }}
                            class="abc group border-primary-500 bg-background-100/50 hover:bg-background-100 rounded-xl border shadow-sm transition-all hover:shadow-lg"
                        >
                            <a
                                href={tech.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex min-h-[120px] w-full items-start p-5"
                                aria-label={`Learn more about ${tech.name}`}
                            >
                                <tech.icon
                                    class="text-primary-600 group-hover:text-accent-600 mt-1 mr-4 h-6 w-6 flex-shrink-0 transition-colors"
                                    aria-hidden="true"
                                />
                                <div class="flex flex-col space-y-1.5">
                                    <h4 class="text-text-900 group-hover:text-accent-600 flex items-center text-lg font-semibold transition-colors">
                                        {tech.name}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="ml-1.5 h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </h4>
                                    <p class="text-text-600 group-hover:text-accent-600 text-sm">{tech.description}</p>
                                </div>
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>

    <div class="metrics-section mt-32 px-6">
        <div class="border-primary-500 bg-background-100/50 mx-auto max-w-4xl rounded-xl border p-10 shadow-lg">
            <h3 class="text-primary-600 mb-12 text-center text-2xl font-bold">Performance Metrics</h3>

            <div class="grid grid-cols-2 gap-10 md:grid-cols-4">
                {#each metrics as metric, i}
                    <div class="flex flex-col items-center">
                        <div class="relative mb-4 h-28 w-28">
                            <svg class="h-full w-full" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" class="text-primary-200" stroke-width="8" />

                                <circle
                                    use:animateMetricCircle={{ i }}
                                    class="text-primary-500 origin-center -rotate-90 transform"
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="8"
                                    stroke-linecap="round"
                                    stroke-dasharray="0 283"
                                    pathLength="100"
                                />
                            </svg>

                            <div class="absolute top-0 left-0 flex h-full w-full items-center justify-center">
                                <span use:animateMetricText={{ i }} class="metric-score text-text-900 text-3xl font-bold">0</span>
                            </div>
                        </div>
                        <span class="text-text-700 text-base font-medium">{metric.name}</span>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
