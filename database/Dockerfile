FROM mongo

ENV MONGO_INITDB_ROOT_USERNAME root
ENV MONGO_INITDB_ROOT_PASSWORD root
ENV MONGO_INITDB_DATABASE testdb

COPY sample_foo.json /tmp/sample_foo.json
COPY sample_bar.json /tmp/sample_bar.json

# CMD mongoimport --db testdb --collection testdata --file /tmp/sample.json --username root --password root  --authenticationDatabase admin
COPY importscript.sh /docker-entrypoint-initdb.d/

# RUN chmod +x importscript.sh

ADD ./init-mongo.js /docker-entrypoint-initdb.d/