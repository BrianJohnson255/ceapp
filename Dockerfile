FROM node:12

# Expo setup

EXPOSE 190000
EXPOSE 190001

ENV REACT_NATIVE_PACKAGER_HOSTNAME=host.docker.internal

WORKDIR /app

COPY . .

# ...

# Rails setup

# ...

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]
