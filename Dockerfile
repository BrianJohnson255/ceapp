FROM node:12

# Expo setup

RUN npm install -g expo-cli
COPY /client/ceapp /npm-build-server
WORKDIR /npm-build-server

# ENV REACT_NATIVE_PACKAGER_HOSTNAME=host.docker.internal
ENV REACT_NATIVE_PACKAGER_HOSTNAME=10.51.50.119
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

# COPY docker-entrypoint.sh /docker/
# RUN chmod +x /docker/docker-entrypoint.sh
# ENTRYPOINT ["/docker/docker-entrypoint.sh"]

CMD ["npm", "start"]

# ...

# Rails setup

# ...

# COPY entrypoint.sh /usr/bin/
# RUN chmod +x /usr/bin/entrypoint.sh
# ENTRYPOINT ["entrypoint.sh"]

# EXPOSE 3000

# CMD ["rails", "server", "-b", "0.0.0.0"]
