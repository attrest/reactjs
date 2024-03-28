FROM node:21-alpine AS base
RUN corepack enable

FROM base AS deps
WORKDIR /app

# 의존성 설치 
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install

# sharp 개별 설치
RUN npm install -g --arch=x64 --platform=linux --libc=glibc sharp

RUN rm -rf ./.next/cache

FROM base AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules

# pnpm 빌드
RUN pnpm build

# pnpm 빌드 후 sharp 개별 이동
COPY --from=deps /usr/local/lib/node_modules/sharp ./node_modules/sharp

FROM base as runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_SHARP_PATH=/app/node_modules/sharp

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/node_modules/sharp ./node_modules/sharp

EXPOSE 3001

ENV PORT 3001

# 실행
CMD ["node", "server.js"]