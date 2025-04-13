FROM node:22.12.0-alpine AS base

# Устанавливаем актуальную версию pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Этап установки зависимостей
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json pnpm-lock.yaml* ./

# Установка зависимостей
RUN pnpm install --frozen-lockfile

# Этап сборки
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Сборка проекта
RUN pnpm run build

# Финальный образ
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs && \
    adduser -S -u 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./

RUN mkdir -p .next && \
    chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]