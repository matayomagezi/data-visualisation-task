#!/bin/bash

mongoimport --db='testdb' --collection='deviceDataFoo' --type=json --file='/tmp/sample_foo.json' --jsonArray --username='root' --password='root' --authenticationDatabase=admin
mongoimport --db='testdb' --collection='deviceDataBar' --type=json --file='/tmp/sample_bar.json' --jsonArray --username='root' --password='root' --authenticationDatabase=admin

# mongoimport --db testdb --collection deviceData --type json --file /tmp/sample.json --username root --password root --authenticationDatabase admin
# mongoimport --db testdb --collection device_bar --type json --file /tmp/sample.json --username root --password root --authenticationDatabase admin --drop
