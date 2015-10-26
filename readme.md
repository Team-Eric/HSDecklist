To run.

Install php

Enable openssl module and mbstring module in php.ini

Install composer https://getcomposer.org/

```
cp .env.example .env
composer install
php artisan key:generate
php artisan serve
```

http://localhost:8000/
