## Usage ##
* Click one of the nine hero buttons on the front page to expand them
* Click on one of the decks in the expanded hero button
* Use the +/- buttons to indicate the number of cards that you currently possess in the deck list.
* The dust cost will change accordingly (some cards do not cost dust/may required expansion packs)
* The optimal pack recommended will change according to which cards you currently possess.

## Technologies ##
* Backend - PHP
    * Laravel: Web Framework
    * Composer: Dependency Management
* Frontend
    * HTML, CSS, AngularJS
    * Bootstrap, AngularUI Bootstrap
* Database - Sqlite

## Running Locally ##
* Install PHP
  * Enable openssl, mbstring, and sqlite extensions in php.ini
* Install Composer

  ```
  cp .env.example .env
  composer install
  php artisan key:generate
  php artisan serve
  ```
* Navigate to http://localhost:8000/
