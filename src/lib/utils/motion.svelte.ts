import { inView } from "motion";

export const animateNode = <TArgs = undefined>(animate: (node: Element, args: TArgs) => void) => {
    return ((node: Element, args?: TArgs) => {
        animate(node, args as TArgs);
    }) as TArgs extends undefined ? (node: Element) => void : (node: Element, args: TArgs) => void;
};

export const inViewNode = <TArgs = undefined>(animate: (node: Element, args: TArgs) => void) => {
    return ((node: Element, args?: TArgs) => {
        inView(node, () => {
            animate(node, args as TArgs);
        });
    }) as TArgs extends undefined ? (node: Element) => void : (node: Element, args: TArgs) => void;
};

export const animateNodes = <TArgs = undefined>(animate: (nodes: Map<Element, TArgs>) => void) => {
    const nodes: Map<Element, TArgs> = new Map();

    $effect(() => {
        animate(nodes);
    });

    return (node: Element, args?: TArgs) => {
        nodes.set(node, args as TArgs);
    };
};

export const inViewGroup = <TArgs = undefined>(animate: (node: Element, args: TArgs) => void) => {
    return animateNodes<TArgs>((nodes) => {
        inView(Array.from(nodes.keys()), (node) => {
            animate(node, nodes.get(node) as TArgs);
        });
    });
};

/*
export const createAnimation = <TArgs = undefined>(animate: (node: Element, args: TArgs) => void) => {
    return ((node: Element, args?: TArgs) => {
        animate(node, args as TArgs);
    }) as TArgs extends undefined ? (node: Element) => void : (node: Element, args: TArgs) => void;
};

export function createInViewAnimation<TArgs = undefined>(animate: (node: Element, args: TArgs) => void) {
    return createAnimation<TArgs>((node, args) => {
        inView(node, () => {
            animate(node, args);
        });
    });
}

export function createGroupInViewAnimation<TArgs = undefined>(animate: (node: Element, args: TArgs) => void) {
    const nodes = $state(new Map<Element, TArgs>());
    const derived = $derived(Array.from(nodes.keys()));

    $effect(() => {
        if (derived.size <= 0) return;

        inView(derived, (node) => {
            const args = nodes.get(node);
            if (args) {
                animate(node, args);
            }
        });
    });

    return (node: Element, args?: TArgs) => {
        nodes.set(node, args as TArgs);
    };
}

export function animateElements(selector: string, delay: number = 0.1) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((element, index) => {
        (element as HTMLElement).animate(
            [
                {
                    opacity: 0,
                    transform: "translateY(50px) scale(0.95)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0) scale(1)"
                }
            ],
            {
                delay: index * delay * 1000,
                duration: 600,
                easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
                fill: "forwards"
            }
        );
    });
}

export function animateElement(selector: string, duration: number = 0.6) {
    const element = document.querySelector(selector);
    if (element) {
        (element as HTMLElement).animate(
            [
                {
                    opacity: 0,
                    transform: "translateY(30px) scale(0.98)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0) scale(1)"
                }
            ],
            {
                duration: duration * 1000, // Convert to milliseconds
                easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
                fill: "forwards"
            }
        );
    }
}

export function setupScrollAnimations() {
    document.querySelectorAll(".scroll-animate").forEach((element) => {
        inView(element as HTMLElement, () => {
            (element as HTMLElement).animate(
                [
                    {
                        opacity: 0,
                        transform: "translateY(50px) scale(0.95)"
                    },
                    {
                        opacity: 1,
                        transform: "translateY(0) scale(1)"
                    }
                ],
                {
                    duration: 700,
                    easing: "cubic-bezier(0.2, 0.0, 0.0, 1.0)",
                    fill: "forwards"
                }
            );
        });
    });

    document.querySelectorAll(".parallax").forEach((element) => {
        window.addEventListener("scroll", () => {
            const scrollPos = window.scrollY;
            if (element instanceof HTMLElement) {
                const speed = element.dataset.speed || "0.1";
                const yPos = scrollPos * parseFloat(speed);
                element.style.transform = `translateY(${yPos}px)`;
            }
        });
    });

    document.querySelectorAll(".rotate-on-scroll").forEach((element) => {
        window.addEventListener("scroll", () => {
            const scrollPos = window.scrollY;
            if (element instanceof HTMLElement) {
                const speed = element.dataset.speed || "0.02";
                const rotation = scrollPos * parseFloat(speed);
                element.style.transform = `rotate(${rotation}deg)`;
            }
        });
    });
}
*/
