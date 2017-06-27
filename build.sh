#!/usr/bin/env bash

eval $(docker-machine env default)

docker-machine start default

docker-compose build && docker-compose up
