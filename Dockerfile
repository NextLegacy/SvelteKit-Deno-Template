FROM denoland/deno:alpine AS builder
RUN apk add --no-cache libstdc++

WORKDIR /app

COPY deno.json ./
RUN deno cache deno.json

COPY . .
RUN deno task build

FROM denoland/deno:alpine

WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/deno.docker.json ./deno.json

ENV DENO_ENV=production

CMD deno run -A build/index.js
