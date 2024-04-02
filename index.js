/**
 * Creates an Express server.
 * @module expressServer
 */

import express from "express";
import data from "./mocks/collaborators.json" assert { type: "json" };

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
  console.log(`[Request] ${req.path}`);
  res.send(data);
});

/**
 * Responds with a list of collaborators with the given position passed in the request parameter object.
 * @function
 * @name collaboratorsPositionRoute
 * @memberof module:expressServer
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get("/collaborators/:position", (req, res) => {
  const { position } = req.params;
  console.log(position);
  const collabs = [
    { name: "John Doe", company_id: 233, position: "analyst" },
    { name: "Gene Doe", company_id: 18, position: "director-assistant" },
  ];
  res.send(collabs.filter((curr) => curr.position === position));
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
  const { q } = req.query;
  if (q === "notebook") res.send([{ type: "notebook", collaborator: 18 }]);
  res.send(`No supply with the type "${q}" found`);
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
