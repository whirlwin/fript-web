#!/usr/bin/env bash

db-migrate \
    --migrations-dir=./db/migrations \
    up

