const express = require('express');
const router = express.Router();

function getUsers(req:any, res:any) {
  res.send('Get all users');
}

function createUser(req:any, res:any) {
  res.send('Create a new user');
}

function main() {
  router.get('/', getUsers);
  router.post('/', createUser);

  return router;
}

// Exporting a default handler function
module.exports = main();