##Fastly URL shortener
The goal of this exercise is to create a URL shortener web application in the same vein as bitly, TinyURL, or the now defunct Google URL Shortener.

##REQUIREMENTS
Application Requirements

When navigating to the root path (e.g. http://localhost:8080/) of the app in a browser a user should be presented with a form that allows them to paste in a (presumably long) URL (e.g. https://www.google.com/search?q=url+shortener&oq=google+u&aqs=chrome.0.69i59j69i60l3j0j69i57.1069j0j7&sourceid=chrome&ie=UTF-8).

When a user submits the form they should be presented with a simplified URL of the form http://localhost:8080/{slug} (e.g. http://localhost:8080/h40Xg2). The format and method of generation of the slug is up to your discretion.
When a user navigates to a shortened URL that they have been provided by the app (e.g. http://localhost:8080/h40Xg2) they should be redirected to the original URL that yielded that short URL (e.g https://www.google.com/search?q=url+shortener&oq=google+u&aqs=chrome.0.69i59j69i60l3j0j69i57.1069j0j7&sourceid=chrome&ie=UTF-8).

Only allow valid URLs (e.g., start with http(s)://{domain}/ )
 
###Built With
* [Bootstrap](https://getbootstrap.com)
* [Django](https://www.djangoproject.com/)
* [React](https://reactjs.org/)
* [PostgreSQL](https://www.postgresql.org/)

Django is one of the most complete web development frameworks available. It’s fast, secure, and scalable. With the power of Python, we can get an application up and running in just about no time.
 
React Native combines the advantages of native development with React and its best-in-class JavaScript library for building user interfaces.
 
This architecture (that separates the front from the back-end) allows a better decoupling of them both, with teams that can develop in their domains completely independently.
React Native and Django pair well due mostly to their ability to quickly generate cross-platform apps, the ease of hiring for each framework, and the large amount of institutional support that each enjoys. 

##Deliverables
Implement your solution, including test cases for your application code.
We will execute your code using either:
- `the make targets specified in Makefile (download this file). 
Edit the contents of Makefile to provide an interface for running and testing your application
Include any other notes for our engineering team that you would like regarding your approach, assumptions you have made, how to run your code, how to use your application, etc in a file named notes.txt.`
- `(b) Or you could use other tools (like Docker/Docker-Compose, npm, or Yarn) to make it easy for the Evaluator to quickly and easily setup your submission, run the tests, and run the application. 
Please put your instructions in notes.txt how to setup, run, and test your application if you are not using the Makefile
E-mail the point of contact that sent you this exercise and include a link to a public GitHub (or GitLab) repository. 
Note: if your github account is monitored or the like, then simply create a new github account for this submission.`

##Getting Started

###Running
1. `docker-compose build`
1. `docker-compose up`

Alternatively, you can run them separately:
1. `Backend: python manage.py runserver`
2. `Frontend: npm start`

###Tests
1. `Backend: python manage.py test`
2. `Frontend: yarn test`
 
Using Docker:

`docker-compose run backend python manage.py test`