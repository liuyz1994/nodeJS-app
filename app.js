const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(express.json())
const port = 3000;

app.head('/public', (req, res, next) => {
    res.send({
        message: "working great!!!"
    });
  });

app.post('/public', (req, res, next) => {
    var body = req.body;
    res.json({requestBody: req.body});
  });

app.listen(port, () => {
    console.log('listening to port', port);
});