#!/bin/bash

# Check if Docker is installed
if command -v docker &> /dev/null; then
    :
else
    echo "Docker is not installed."
    echo "Please install Docker by following the instructions at: https://docs.docker.com/get-docker/"
    exit 1
fi

docker build -t sportnest:laravel .

cd scraper || exit 1
docker build -t sportnest:scraper .

cd ..
cd scripts  || exit 1
docker build -t sportnest:db-seeder .

cd ..
cd deploy || exit 1
docker compose up -d

if [ "$SEED" == "TRUE" ]; then
    echo "Waiting 5s, before seeding"
    sleep 5
    docker run --network=host  --name db-seeder sportnest:db-seeder

    echo "Press enter to remove db-seeder container"
    read -r
    docker rm db-seeder
else
    echo "Not seeding, exiting..."
fi


