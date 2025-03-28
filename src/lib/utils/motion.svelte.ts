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
