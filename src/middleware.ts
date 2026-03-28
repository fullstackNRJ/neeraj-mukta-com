import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((_context, next) => {
    return next().then((response) => {
        const headers = response.headers;

        headers.set("X-Content-Type-Options", "nosniff");
        headers.set("X-Frame-Options", "SAMEORIGIN");
        headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
        headers.set(
            "Permissions-Policy",
            "camera=(), microphone=(), geolocation=()",
        );
        headers.set(
            "Content-Security-Policy",
            [
                "default-src 'self'",
                "script-src 'self' 'unsafe-inline'",
                "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                "font-src 'self' https://fonts.gstatic.com",
                "img-src 'self' data: https://lh3.googleusercontent.com",
                "connect-src 'self'",
                "frame-ancestors 'none'",
            ].join("; "),
        );

        return response;
    });
});
