# Giai đoạn 1: Build
FROM node:20-alpine as build

WORKDIR /app

COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy tất cả các tệp còn lại và xây dựng ứng dụng
COPY . .
RUN yarn run build && \
    yarn cache clean && \
    rm -rf /root/.cache /app/node_modules

# Giai đoạn 2: Production
FROM node:20-alpine

WORKDIR /app

# Chỉ copy các tệp cần thiết từ stage build
COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile --production && \
    yarn cache clean

# Copy các tệp đã xây dựng từ stage build
COPY --from=build /app/dist ./dist

# Cài đặt PM2
RUN yarn global add pm2

# Chạy ứng dụng bằng PM2
CMD ["pm2-runtime", "start", "dist/main.js", "--name", "server_acc"]
#CMD ["pm2-runtime", "start", "yarn", "--name", "server_hr", "--", "start:prod"]

# Expose port (thay đổi port nếu cần)
EXPOSE 3000

#artillery run load-test.yml

# pm2 start dist/main.js -i max --name name_app
