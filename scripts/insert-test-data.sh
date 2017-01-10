#!/usr/bin/env bash

ENV=$1
SQL_FILE=$2

cat "./db/example/${SQL_FILE}" \
    | heroku pg:psql DEV_DB_URL --app fript-api-${ENV}
