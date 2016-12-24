#!/usr/bin/env bash

export ENV=dev

db-migrate \
    --migrations-dir=./db/migrations \
    create "insert-into-$1" \
    --sql-file
