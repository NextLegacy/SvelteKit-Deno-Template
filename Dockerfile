FROM denoland/deno:alpine AS builder

WORKDIR /app
COPY deno.json ./
RUN deno cache deno.json

COPY . .
RUN deno task build

FROM denoland/deno:alpine
WORKDIR /app

COPY --from=builder /app/build /app/build
# little hack for async_hooks
COPY --from=builder /app/deno.docker.json /app/deno.json 

EXPOSE 3000
ENV DENO_ENV=production

CMD ["deno", "run", "--allow-net", "--allow-read", "--allow-env", "build/index.js"]