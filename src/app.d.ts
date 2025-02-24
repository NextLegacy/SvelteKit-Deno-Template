// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

import "jsr:unplugin-icons/types/svelte";

declare global {
    declare module "*&format=webp";
    declare module "*?format=webp";
    declare module "~icons/*";

    namespace App {
        interface Locals {}
        interface PageData {
            metadata: MetaData;
        }
    }
}

export {};
