FROM denoland/deno:alpine AS builder

WORKDIR /app

COPY . .

RUN apk add --no-cache libstdc++

# Set a default DATABASE_URL for build time
ARG DATABASE_URL="postgresql://placeholder"
ENV DATABASE_URL=$DATABASE_URL

RUN deno task build

FROM denoland/deno:alpine

WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/deno.docker.json ./deno.json

ENV DENO_ENV=production

CMD DATABASE_URL=${DATABASE_URL} deno run -A build/index.js
