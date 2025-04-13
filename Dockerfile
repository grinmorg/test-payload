FROM node:22.12.0-alpine AS base

# Устанавливаем pnpm напрямую через npm и настраиваем окружение
RUN npm install -g pnpm

# Этап установки зависимостей
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Копируем только необходимые файлы зависимостей
COPY package.json pnpm-lock.yaml* ./

# Устанавливаем зависимости с игнорированием проверок
RUN pnpm install --frozen-lockfile --ignore-scripts

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

# Создаем пользователя с явным указанием домашней директории
RUN addgroup -g 1001 -S nodejs && \
    adduser -S -u 1001 -h /app -G nodejs nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./

# Настраиваем права доступа
RUN mkdir -p .next && \
    chown -R nextjs:nodejs .next && \
    chown -R nextjs:nodejs /app

USER nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]