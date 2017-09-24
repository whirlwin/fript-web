#!/usr/bin/env bash

export ENV=dev

if [ -z "$1" ]; then
    printf "Please specify a table name\n\n"
    exit 1
fi

db-migrate \
    --migrations-dir=./db/migrations \
    create "createFeedback-table-$1"
