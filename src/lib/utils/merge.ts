import { isObject } from "./utils";

/**
 * Deeply merges two objects, recursively combining their properties
 */
export function deepMerge<T extends object, S extends object>(target: T, source: S): T & Partial<S> {
    if (!source) return structuredClone(target) as T & Partial<S>;
    if (!target) return {} as T;

    const output = structuredClone(target) as T & Partial<S>;
    const keys = Object.keys(source);

    for (const key of keys) {
        const sourceValue = (source as Record<string, unknown>)[key];

        if (sourceValue === undefined) continue;

        const outputKey = key as unknown as keyof typeof output;

        if (key in output) {
            const outputValue = output[outputKey];

            if (isObject(sourceValue) && isObject(outputValue)) {
                output[outputKey] = deepMerge(outputValue as object, sourceValue as object) as unknown as (T & Partial<S>)[typeof outputKey];
                continue;
            }
        }

        output[outputKey] = sourceValue as unknown as (T & Partial<S>)[typeof outputKey];
    }

    return output;
}
