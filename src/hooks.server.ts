import { paraglideMiddleware } from "$lib/paraglide/server";

export const handle = ({ event, resolve }) => {
    return paraglideMiddleware(event.request, ({ locale }) => {
        return resolve(event, {
            transformPageChunk: ({ html }) => html.replace("%lang%", locale)
        });
    });
};
