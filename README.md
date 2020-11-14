# express-barber


### Intro
This is a practice exercise to use express.js to create a server and establish routes

### Steps for set-up
1. create a server.js file
2. npm init -y
3. npm install express

### Steps to build server
1. require express
2. create an instance of express
3. set the PORT. (use process.env.PORT || PORT)
4. listen to the port
5. add middleware

### Build Routes
* build a test route, `/api/config`

### View Routes
* always going to be get routes
* sends back HTML for the browser to parse and display
* use `res.sendFile` to send back a previously built HTML

#### To Send Back an HTML file
1. Build a get route
2. Call `res.sendFile` 
3. Use `path.join()` to combine the _dirname w/the file name(`npm install path`)

### API Routes
* Resource-driven API Development

1. GET "/api/resources" returns a collection of resources
2. GET "/api/resources/:id" returns a single resource
3. POST "/api/resources" allows the user to create a new resources
### Specific View Roues
1. view haircut menu
2. view haircut appointment
3. view appointment

Views routes will need HTML built out as that's what will be returned

HTML will have:
    *Boilerplate
    *CSS Lbrary
    *jQuery
    *Placeholder w/the page title `<h1></h1>`
### Specific API Routes
1. view haircuts
2. create appointment

