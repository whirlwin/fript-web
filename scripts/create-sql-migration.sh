#!/usr/bin/env bash

db-migrate \
    --migrations-dir=./db/migrations \
    create "$1" \
    --sql-file

