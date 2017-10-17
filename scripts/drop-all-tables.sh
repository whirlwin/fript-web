#!/usr/bin/env bash

ENV=$1

cat "./db/st-fixtures/drop-all-tables.sql"\
    | heroku pg:psql DEV_DB_URL --app fript-staging
