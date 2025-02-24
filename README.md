# Sveltekit + Deno Template for my projects 🦖

This is just a template I use for my projects.

Feel free to use it for your own projects. ✨

## How to use

1. Clone this repository
2. Install dependencies with `deno install --allow-scripts`
3. Running `deno task dev` runs the dev server most likely on port 5173 if it's available (http://localhost:5173)
4. Running `deno task build` builds the project
5. Running `deno task preview` runs the production build

## Deploying using Docker

1. Build the Docker image with `docker build -t sveltekit-deno .`
2. Run the Docker container with `docker run -p 3000:3000 sveltekit-deno`
