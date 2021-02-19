# Ally-test

Repository for testing the jr developer position at Startup Ally.

## The project

There are two parts to this project:

- Fullstack CRUD development using Larvel and Angular.

- Backend Currencies Conversion

### Notes: 

- For the development of the currency conversion system, the Python language was used in backend.
To get access, use the GET method in:
```
http://127.0.0.1:8000/api/task2
```

### Technologies used
- Python
- API REST JSON
- Laravel
- PHP
- MySQL
- Eloquent ORM
- Okta
- Angular

## Set up backend
- Install Pyhton 3.3 or later, and also:
```
 pip install simplejson
```
- Clone this repository
- Create and configure the database
- Edit your credentials in app/Http/Middleware/AuthenticateWithOkta.php

### Set up the Backend

```
cd allytest-api
npm install -g @angular/cli
npm install
ng serve --open
```

### TODO
- Fix Angular communication with backend
- Fix Heroku Forbidden message
