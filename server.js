/**
 * Authorizer
 *
 * Remote authorization server for Rapyd card issuing platform.
 *
 * @file   This files defines the rest api endpoints.
 * @author Isaac Benitez.
 * @version 0.0.1
 * 
 * @requires express
 */

const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT);

app.get('/status', (req, res) => {
    res.json({"status": "Running..."});
})

app.post('/auth', (req, res) => {

    let code = "00";

    // simulate insufficient funds
    if (req.body.amount === 404) {
        code = "51";
    }

    const auth_response = {
        "authorization_id": req.body.authorization_id,
        "response_code": code,
        "auth_code": Math.random().toString(36).substr(2, 6).toUpperCase()
    }

    console.log(auth_response);

    res.json(auth_response);
})