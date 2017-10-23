#!/usr/bin/env bash

ENV=$1

cat "./db/fixtures/insert-test-data.sql" \
    | heroku pg:psql DEV_DB_URL --app fript-${ENV}
