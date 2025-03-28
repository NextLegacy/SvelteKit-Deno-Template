FROM denoland/deno:alpine AS builder

WORKDIR /app

COPY . .

RUN apk add --no-cache libstdc++

RUN deno task build --allow-scripts

FROM denoland/deno:alpine

WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/deno.docker.json ./deno.json

ENV DENO_ENV=production

CMD deno run -A build/index.js
