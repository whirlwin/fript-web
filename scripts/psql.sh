#!/usr/bin/env bash

heroku pg:psql DEV_DB_URL --app fript-api-$1
