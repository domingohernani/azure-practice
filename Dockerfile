# Stage 1: Build & Install Dependencies
FROM node:24-alpine AS builder

WORKDIR /usr/src/app

# Copy lockfile along with package.json for deterministic, cached installs
COPY package*.json ./

# npm ci is faster and safer for automated builds than npm install
# omit=dev skips devDependencies if you only need production packages
RUN npm ci --omit=dev

# Stage 2: Production Runtime
FROM node:24-alpine

WORKDIR /usr/src/app

# Copy built node_modules and app code from the builder stage
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY package*.json ./
COPY . .

# Run as a non-root user for security best practices
USER node

EXPOSE 3000

CMD [ "node", "src/index.js" ]