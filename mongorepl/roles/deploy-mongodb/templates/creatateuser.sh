#!/bin/bash
mongo
use admin
db.createUser({user: "mongo-admin", pwd: "pass", roles:[{role: "root", db: "admin"}]})
