FROM ruby:2.6

WORKDIR /server

COPY Gemfile .
COPY Gemfile.lock .
RUN bundle install

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]

COPY . .

RUN rails db:migrate

EXPOSE 3000
ENV HOST_IP=0.0.0.0
CMD rails server -b $HOST_IP -p 3000
