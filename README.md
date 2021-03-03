## Project: URL Shortener

The goal of this exercise is to create a URL shortener web application in the same vein as bitly, TinyURL, or the now defunct Google URL Shortener.

## Project Setup

Clone the repository:
git clone https://github.com/BajramHoxha/URL_Shortener.git

## Technology Stack

Built With:
* [Bootstrap](https://getbootstrap.com)
* [Django](https://www.djangoproject.com/)
* [React](https://reactjs.org/)
* [PostgreSQL](https://www.postgresql.org/)

Django is one of the most complete web development frameworks available. It’s fast, secure, and scalable. With the power of Python, we can get an application up and running in just about no time.

React Native combines the advantages of native development with React and its best-in-class JavaScript library for building user interfaces.
This architecture (that separates the front from the back-end) allows a better decoupling of them both, with teams that can develop in their domains completely independently. React Native and Django pair well due mostly to their ability to quickly generate cross-platform apps, the ease of hiring for each framework, and the large amount of institutional support that each enjoys.

## Getting Started

### Setting up a virtual environment

##### MAC
Inside the Root of the project directory, create a virtual environment:
- virtualenv virtual_env -p python3

Activate the newly created virtual environment:
- source virtual_env/bin/activate


##### WINDOWS
Create the environment:

   -  py -m venv virtual_env

Activate the virtual environment:

   -  virtual_env\Scripts\activate.bat

Docs: (http://virtualenvwrapper.readthedocs.io/en/latest/)

## Creating Required Files/Packages:
Create two **.env** files.
Within the Root project directory, create a file and name it as **.env.dev** with the following content:

    DEBUG=1
    SECRET_KEY=bwhk^eyx_yyaole8sl7s)_uot)o(9(20_&ms(*%e)u_@ni9-_+
    DJANGO_ALLOWED_HOSTS=localhost 127.0.0.1 0.0.0.0
    CORS_ORIGIN_WHITELIST=http://localhost:3000
    
    POSTGRES_ENGINE=django.db.backends.postgresql
    POSTGRES_DB=stord
    POSTGRES_USER=stord_user
    POSTGRES_PASSWORD=stord_pwd
    POSTGRES_HOST=db
    POSTGRES_PORT=5432

Inside Frontend directory, create another file called **.env** with the following content:
   
    SKIP_PREFLIGHT_CHECK=true

## Running
1. docker-compose build
2. docker-compose up

Now, the application should be running:
- http://localhost:3000/

## Run Tests

- Backend: python manage.py test
- Frontend: yarn test

### Additional Notes:
Sometimes some issues may occur with the npm packages due to different Node versions you may have pre-installed in your local machine. In such case, please consider the following options:

1. npm cache clean --force
2. rm -R node_modules/
3. rm package-lock.json
4. npm install

## Make DB Migrations:
When you make any changes to the backed models, please upgrade the DB using the following commands:

1. python manage.py makemigrations backend
2. python manage.py migrate
 

