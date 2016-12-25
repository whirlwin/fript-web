#!/usr/bin/env bash

if [ "$ENV" == "development" ]; then
    ENV="dev"
elif [ "$ENV" == "production" ]; then
    ENV="prod"
fi

export ENV

db-migrate \
    --migrations-dir=./db/migrations \
    up

