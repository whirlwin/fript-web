#!/usr/bin/env bash

ENV=$1

if [ ${ENV} == "prod" ]; then
  echo "Continue? Please type the name of the database"
  read -p "" CONTINUE
  if [ "${CONTINUE}" == "fript-production" ]; then
    DB_NAME="fript-production"
  else
    echo "[ABORT]: Not deleting prod database..."
    exit 0
  fi
else
  DB_NAME="fript-${ENV}"
fi

cat "./db/st-fixtures/drop-all-tables.sql"\
    | heroku pg:psql DEV_DB_URL --app ${DB_NAME}
