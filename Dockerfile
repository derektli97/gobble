FROM node:9 as builder
RUN mkdir /tamuhack
WORKDIR /tamuhack
COPY . .

RUN yarn install --quiet
RUN yarn run build

FROM nginx:alpine
COPY --from=builder tamuhack/build/ /usr/share/nginx/html/
