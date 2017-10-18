#!/usr/bin/env bash

ENV=$1

heroku pg:psql DEV_DB_URL --app "fript-$ENV"
