# Sử dụng phiên bản nhẹ của Node.js
FROM node:20-alpine

# Đặt thư mục làm việc
WORKDIR /app

# Sao chép package.json và yarn.lock trước để tận dụng Docker cache
COPY package.json yarn.lock ./

# Cài đặt dependencies
RUN yarn install --frozen-lockfile && yarn cache clean

COPY . .

EXPOSE 3030

CMD ["yarn", "start"]
