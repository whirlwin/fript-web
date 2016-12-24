#!/usr/bin/env bash

export ENV=dev

db-migrate \
    --migrations-dir=./db/migrations \
    create "create-table-$1"
