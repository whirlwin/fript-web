#!/usr/bin/env bash

export ENV=$1

db-migrate \
    --migrations-dir=./db/migrations \
    up

