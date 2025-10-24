# Stage 1: Build Next.js
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build the app
RUN npm run build

# Stage 2: Production image
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

RUN npm install --production

EXPOSE 3000

CMD ["npm", "start"]

FROM maven:3.9.3-eclipse-temurin-21

WORKDIR /app

# Install system dependencies for Playwright
RUN apt-get update && apt-get install -y \
    libnss3 libatk1.0-0 libxss1 libgtk-3-0 libx11-xcb1 libxcomposite1 libxcursor1 libxdamage1 libxrandr2 libgbm1 \
    && rm -rf /var/lib/apt/lists/*

# Install Playwright browsers
RUN npm install -g npm@latest
RUN npm install playwright
RUN npx playwright install --with-deps

# Copy Maven project
COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src

# Default command runs tests
CMD ["mvn", "test"]
