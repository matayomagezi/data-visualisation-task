#!/bin/bash

mongoimport --db='testdb' --collection='deviceDataFoo' --type=json --file='/tmp/sample_foo.json' --jsonArray --username='root' --password='root' --authenticationDatabase=admin
mongoimport --db='testdb' --collection='deviceDataBar' --type=json --file='/tmp/sample_bar.json' --jsonArray --username='root' --password='root' --authenticationDatabase=admin

