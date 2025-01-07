FROM node:18 AS npm-stage

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . ./

RUN npm run build


FROM php:8.2-cli

RUN apt-get update -y && apt-get install -y libmcrypt-dev git zip

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN docker-php-ext-install pdo_mysql

WORKDIR /app
COPY . /app
COPY --from=npm-stage /app/public/build /app/public/build

RUN composer install

CMD php artisan migrate && php aritsan db:seed && php artisan serve --host=0.0.0.0 --port=8000

