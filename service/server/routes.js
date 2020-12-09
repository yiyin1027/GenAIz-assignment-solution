const { StatusCodes: httpStatus } = require("http-status-codes");

const express = require("express");
const fetch = require('node-fetch');

const router = new express.Router();

// TODO: Create a GET endpoint for project summaries

router.get("/test", async function (req, res) {

  let response = await fetch('https://nodejs-tech-assignment.herokuapp.com/projects?user_id=5fb5d7d5e77b3749e751906c');
  let json = await response.json();

  let {_id, title, description} = json[0];
  let projects = {_id, title, description};

  let response2 = await fetch(`https://nodejs-tech-assignment.herokuapp.com/elements?project_id=${json.rootElement}`);
  let json2 = await response2.json();
  let elements = [];

  json2.map((obj) => {
    let {_id, title, description} = obj;
    let e = {_id, title, description};
    elements.push(e);
  })

  projects.elements = elements;

  projects = [projects];

  projectStr = JSON.stringify(projects, null, " ")
  
  console.log(projects);
  console.log(projectStr);
  res.send(projects);
});

//Fallback routes
router.all('*', (req, res) => {
  res.send("Please go to /test");
});

module.exports = router;
