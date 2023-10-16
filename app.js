const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(express.json())
const port = process.env.PORT || 3000;

app.get('/public', (req, res, next) => {
    console.log("response", res);
    res.send({
        message: "working great!!!"
    });
  });

app.post('/public', (req, res, next) => {
    var body = req.body;
    console.log("POST: " + JSON.stringify(body));
    res.json({requestBody: req.body});
  });

app.listen(port, () => {
    console.log('listening to port', port);
});