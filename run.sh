#!/usr/bin/env bash
#docker system prune
#docker build -t btcpal .
docker run  --name btcpal --env-file ./.env -p 5555:5555 btcpal
