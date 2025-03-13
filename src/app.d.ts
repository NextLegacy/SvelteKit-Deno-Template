import "unplugin-icons/types/svelte";

declare global {
    // @ts-ignore
    declare module "*&format=webp";
    // @ts-ignore
    declare module "*&format=png";
    // @ts-ignore
    declare module "*?format=webp";
    // @ts-ignore
    declare module "*?format=png";

    type MetaData = import("$lib/types/metadata").MetaData;

    namespace App {
        interface Locals {}
        interface PageData {
            metadata: MetaData;
        }
    }
}

export {};
