import { paraglideMiddleware } from "$lib/paraglide/server";
import * as auth from "$lib/server/auth.js";
import type { Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

const handleParaglide: Handle = ({ event, resolve }) => {
    return paraglideMiddleware(event.request, ({ locale }) => {
        return resolve(event, {
            transformPageChunk: ({ html }) => html.replace("%lang%", locale)
        });
    });
};

const handleAuth: Handle = async ({ event, resolve }) => {
    const sessionToken = event.cookies.get(auth.sessionCookieName);
    if (!sessionToken) {
        event.locals.user = null;
        event.locals.session = null;
        return resolve(event);
    }

    const { session, user } = await auth.validateSessionToken(sessionToken);

    if (session) {
        auth.setSessionTokenCookie(event, sessionToken, session.expiresAt);
    } else {
        auth.deleteSessionTokenCookie(event);
    }

    event.locals.user = user;
    event.locals.session = session;

    return resolve(event);
};

export const handle: Handle = sequence(handleParaglide, handleAuth);
