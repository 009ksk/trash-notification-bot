FROM node:20.15.0-bookworm-slim

WORKDIR /app

# プロジェクトファイルのコピー
# 必要なパッケージのインストール
RUN apt-get update && apt-get install -y \
    bash \
    curl \
    jq \
    awscli \
    docker.io \
    gnupg \
    lsb-release \
    zip \
    && apt-get clean

RUN npm install -g aws-cdk