/**
 * Creates an Express server.
 * @module expressServer
 */

import express from "express";

const app = express();

/**
 * Responds with a welcome message for the homepage.
 * @function
 * @name homepageRoute
 * @memberof module:expressServer
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get("/", (req, res) => {
    res.send("Welcome to the homepage");
});

/**
 * Responds with a list of collaborators.
 * @function
 * @name collaboratorsRoute
 * @memberof module:expressServer
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get("/collaborators", (req, res) => {
    res.send([{name: "John Doe", company_id: 233, position: "Analyst"}, {name: "Gene Doe", company_id: 18, position: "Director Assistent"}]);
});

/**
 * Responds with supply information.
 * @function
 * @name supplyRoute
 * @memberof module:expressServer
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get("/supply", (req, res) => {
    res.send([{type: "Notebook", collaborator: 18}]);
});

/**
 * Starts the Express server.
 * @function
 * @name listen
 * @memberof module:expressServer
 * @param {number} port - The port number to listen on.
 * @param {Function} callback - The callback function to execute once the server starts listening.
 */
app.listen(3000, () => {
    console.log("Listening");
});
