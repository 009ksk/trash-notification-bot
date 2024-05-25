FROM node:22-alpine3.19

# Install AWS CDK
RUN npm install -g aws-cdk

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .