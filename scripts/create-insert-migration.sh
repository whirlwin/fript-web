#!/usr/bin/env bash

db-migrate \
    --migrations-dir=./db/migrations \
    create "insert-into-$1" \
    --sql-file
