#!/usr/bin/env bash

if [ "$ENV" == "staging" ]; then
    ENV="dev"
elif [ "$ENV" == "production" ]; then
    ENV="prod"
fi

export ENV

db-migrate \
    --migrations-dir=./db/migrations \
    --vcseeder-dir=./db/migrations/seeds \
    up

