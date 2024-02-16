const Router = require("express").Router();
const crolar = require("../controller/crolar");

// Route to render the main page
Router.get("/", crolar.getHomePage);
// Route to get processed words from the New York Times API and generate word cloud
Router.get("/api/word-cloud", crolar.getData);

Router.get("/api/word-cloud/:q", crolar.getArtic);

module.exports = Router;
