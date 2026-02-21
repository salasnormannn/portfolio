# ─── STAGE 1: BUILD ──────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files first (Docker layer caching)
COPY package*.json ./
RUN npm ci --silent

# Copy source and build
COPY . .
RUN npm run build

# ─── STAGE 2: SERVE WITH NGINX ───────────────────────────────
FROM nginx:alpine

# Copy built React app to Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]