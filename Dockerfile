FROM denoland/deno:alpine-2.1.5 AS builder

WORKDIR /app
COPY deno.json ./
RUN deno cache deno.json

COPY . .
RUN deno task build

FROM denoland/deno:alpine-2.1.5
WORKDIR /app

COPY --from=builder /app/build /app/build
EXPOSE 3000
ENV DENO_ENV=production
CMD ["deno", "run", "--allow-net", "--allow-read", "--allow-env", "build/index.js"]