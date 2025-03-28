import "unplugin-icons/types/svelte";

declare global {
    declare module "*&format=webp";
    declare module "*&format=png";
    declare module "*?format=webp";
    declare module "*?format=png";

    declare module "*.md" {
        import type { SvelteComponent } from "svelte";

        export default class Comp extends SvelteComponent {}

        export const metadata: Record<string, MarkdownMetaData>;
    }

    type Snippet = import("svelte").Snippet;
    type Metadata = import("$lib/types/metadata").Metadata;

    namespace App {
        interface Error {
            message: string;
            status: number;
        }
        interface Locals {
            user: import("$lib/server/auth").SessionValidationResult["user"];
            session: import("$lib/server/auth").SessionValidationResult["session"];
        }

        interface PageData {
            metadata: Metadata;
        }
        interface PageState {
            metadata: Metadata;
        }
        // interface Platform {}
    }
}

export {};
