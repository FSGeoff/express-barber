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