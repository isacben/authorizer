const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT);

app.get('/', (req, res) => {
    res.json({"msg":"Server up..."})
})

app.post('/auth', (req, res) => {

    const auth_response = {
        "authorization_id": req.body.authorization_id,
        "response_code": "00",
        "auth_code": Math.random().toString(36).substr(2, 6).toUpperCase()
    }

    res.json(auth_response);
})