FROM denoland/deno:alpine AS builder

RUN apk add libstdc++

WORKDIR /app

COPY deno.json .
COPY deno.lock .

RUN deno install

COPY . .

RUN deno task build

FROM denoland/deno:alpine

WORKDIR /app

COPY --from=builder /app/build ./build

COPY --from=builder /app/deno.docker.json ./deno.json

ENV DENO_ENV=production

CMD ["deno", "run", "--allow-net", "--allow-read", "--allow-env", "build/index.js"]
