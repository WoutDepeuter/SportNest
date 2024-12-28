# SportNest

## Overview
SportNest is a web platform designed to provide users with comprehensive information about various sports clubs. The website features powerful search functionalities, engaging quizzes to help users discover suitable clubs, and tools for administrators to manage content. The project leverages modern web technologies, including PHP, Python, TypeScript, JavaScript, and frameworks like Laravel, React, and Inertia.js.

## Features
- **User Authentication**: Secure login and profile management.
- **Club Directory**: Detailed information and advanced search capabilities for sports clubs.
- **Admin Dashboard**: Tools for content management and oversight.
- **Interactive Quiz**: Personalized quizzes to suggest suitable clubs to users.
- **Data Scraping**: Automated scraper to gather and update club data from external sources.

## Technologies Used
- **Backend**: PHP (Laravel), Python
- **Frontend**: TypeScript, JavaScript, React
- **Database**: MySQL
- **Package Managers**: Composer, npm
- **Other Tools**: Docker, Inertia.js

## Installation

### Prerequisites
Ensure the following tools are installed on your system:
- Docker
- Docker Compose
- Node.js with npm
- Composer

### Setup Instructions

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/WoutDepeuter/sportnest.git
    cd sportnest
    ```

2. **Build and Start Docker Containers**:
    ```bash
    docker-compose -f compose.dev.yaml up --build
    ```

3. **Install Dependencies**:
    - **PHP Dependencies**:
      ```bash
      composer install
      ```
    - **JavaScript Dependencies**:
      ```bash
      npm install
      ```

4. **Run Database Migrations and Seeders**:
    ```bash
    php artisan migrate
    php artisan db:seed
    ```

## Usage

- **Access the Application**: Open your browser and navigate to `http://localhost:5000`.
- **Admin Dashboard**: Access the admin dashboard at `http://localhost:5000/admin/dashboard`.
- **Run Scraper**: Trigger the scraper via the `/run-scraper` endpoint.

## Project Structure
- `resources/js`: Contains frontend React components.
- `routes/web.php`: Defines application routes.
- `app/Http/Controllers`: Manages request handling and business logic.
- `database/migrations`: Contains database schema migration files.
- `database/seeders`: Seeds the database with initial data.

## License
This project is licensed under the MIT License. Refer to the `LICENSE` file for details.

## Contact


