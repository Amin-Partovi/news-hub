# # syntax=docker/dockerfile:1.4

# # 1. For build React app
# FROM node:lts AS development

# # Set working directory
# WORKDIR /app

# # 
# COPY package.json /app/package.json
# COPY yarn.lock /app/yarn.lock

# # Same as npm install
# RUN yarn

# COPY . /app

# ENV CI=true
# ENV PORT=3000

# CMD [ "yarn", "start" ]

# FROM development AS build

# RUN yarn build


# FROM development as dev-envs
# RUN <<EOF
# apt-get update
# apt-get install -y --no-install-recommends git
# EOF

# RUN <<EOF
# useradd -s /bin/bash -m vscode
# groupadd docker
# usermod -aG docker vscode
# EOF
# # install Docker tools (cli, buildx, compose)
# COPY --from=gloursdocker/docker / /
# CMD [ "yarn", "start" ]

# # 2. For Nginx setup
# FROM nginx:alpine

# # Copy config nginx
# COPY --from=build /app/.nginx/nginx.conf /etc/nginx/conf.d/default.conf

# WORKDIR /usr/share/nginx/html

# # Remove default nginx static assets
# RUN rm -rf ./*

# # Copy static assets from builder stage
# COPY --from=build /app/build .

# # Containers run nginx with global directives and daemon off
# ENTRYPOINT ["nginx", "-g", "daemon off;"]


FROM node:lts AS development
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install
# Copy app files
COPY . .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "yarn", "start" ]
