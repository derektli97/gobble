FROM node:9 as builder
RUN mkdir /tamuhack
WORKDIR /tamuhack
COPY . .

RUN yarn install --quiet
RUN yarn run build

FROM nginx:alpine
COPY config/nginx.conf /etc/nginx/nginx.conf
COPY config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder tamuhack/build/ /usr/share/nginx/html/
