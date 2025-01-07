# Deployment

```bash

docker build -t sportnest:laravel .

    cd scraper
docker build -t sportnest:scraper .

cd ../deploy
docker compose up -d

```

This process does NOT run migrations are does the seeds. You will have to make sure have happened before. 
