FROM denoland/deno:alpine-2.1.5 AS builder

WORKDIR /app
COPY . .

RUN deno install --allow-scripts
RUN deno task build
RUN deno cache build/index.js

FROM denoland/deno:alpine-2.1.5
WORKDIR /app

COPY --from=builder /app /app
EXPOSE 3000
ENV DENO_ENV=production
CMD ["deno", "run", "--allow-net", "--allow-read", "--allow-env", "build/index.js"]