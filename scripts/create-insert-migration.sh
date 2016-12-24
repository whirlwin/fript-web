#!/usr/bin/env bash

export ENV=dev

echo $1

db-migrate \
    --migrations-dir=./db/migrations \
    create "insert-into-$1" \
    --sql-file
