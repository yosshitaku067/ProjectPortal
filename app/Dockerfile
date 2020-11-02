# Dockerfile ではソースのコピーとビルド処理を実行する

##################### angular build ##################################################
### ベースステージ ###
FROM node:lts-alpine as angular

# Puppeteer実行に必要なものをインストール
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      freetype-dev \
      harfbuzz \
      ca-certificates \
      ttf-freefont

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
ENV SCULLY_PUPPETEER_EXECUTABLE_PATH '/usr/bin/chromium-browser'

# @angular/cliをグローバルインストール
RUN npm install -g @angular/cli

# 全てのソースコードをコピー
COPY ./angular /angular/

# ワーキングディレクトリの設定
WORKDIR /angular

# 一度 node_modules を削除してからnpm install
RUN npm install

# プロダクションビルド
RUN ng build --prod --base-href="/pj-portal/"

# Sucllyビルド
RUN npm run scully --showGuessError
######################################################################################

##################### express build ##################################################
### 実行用コンテナ ###
FROM nginx:1.11.5

EXPOSE 80

# Nginx設定ファイルのコピー
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# ビルド済みangularサイトをコピー
COPY --from=angular /angular/dist/static /var/www/html/angular
######################################################################################
