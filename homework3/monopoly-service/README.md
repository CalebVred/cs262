# CS 262 Monopoly Webservice

This is the data service application for the [CS 262 sample Monopoly project](https://github.com/calvin-cs262-organization/monopoly-project) 
and it is deployed here:
          
<https://cs262-monopoly-service.herokuapp.com/>

It is based on the standard Heroku with Node.js tutorial.

<https://devcenter.heroku.com/articles/getting-started-with-nodejs>  

The database is relational with the schema specified in the `sql/` sub-directory,
 and is hosted on [ElephantSQL](https://www.elephantsql.com/). The database user
and password are stored as Heroku configuration variables rather than in this (public) repo.

We implement this sample as a separate repo to simplify Heroku integration, but 
for lab 9, you can simply submit your code under the standard `cs262/lab09` directory. 
For the team project, configure your Heroku app to auto-deploy the code from the
master/main branch of your
service repo; do this by following the instructions under the &ldquo;Deploy&rdquo; 
tab in your application in the Heroku dashboard.
 
 ANSWERS:
a:  https://pacific-citadel-39324.herokuapp.com/players
    https://pacific-citadel-39324.herokuapp.com/players/:id
    https://pacific-citadel-39324.herokuapp.com/playergames
b:  .../players can implement the idempotent GET function or the POST function
    .../players:id can implement the idempotent GET function, PUT function or DELETE function
    .../playergames implements the idempotent GET function
c: the service is RESTful because of its use of the GET, PUT, POST and DELETE functions. It also uses the URL structure to access items in the database.
d: my implementation gave multiple "unique" IDs of the same value