/**
 * This file Contains the configuration for the API Token and all the requests
 */



/**
 * port number
 * Enable signed cookie support by passing a secret string, which assigns req.secret so it may be used by other middleware.
 * Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.
 * Node's querystring module for all engines.
 * 
 */
const express = require('express'), //Using Express framework for application ease of routing
  port = process.env.PORT || 3000,
  app = express(),
  cookieParser = require('cookie-parser'), //https://www.npmjs.com/package/cookie-parser
  request = require('request'),
  querystring = require('querystring');

/**
 * @function stringGenerator
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} text The generated string
 * to store the state of the application
 */
let stringGenerator = (length) => {
  let text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

let key = 'spotify_auth_state';


app.listen(port, hostname, () => {
  console.log(`Middleware is up on port ${port}`);
})