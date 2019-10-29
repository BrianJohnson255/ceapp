FROM node:12

# Expo setup

RUN npm install -g expo-cli

COPY /client/ceapp /npm-build-server
WORKDIR /npm-build-server
RUN npm install

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

CMD ["npm", "start"]

# ...

# Rails setup

# ...

# COPY entrypoint.sh /usr/bin/
# RUN chmod +x /usr/bin/entrypoint.sh
# ENTRYPOINT ["entrypoint.sh"]

# EXPOSE 3000

# CMD ["rails", "server", "-b", "0.0.0.0"]
