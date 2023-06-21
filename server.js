const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/triangle', (req, res) => {
  var a;
  var b;
  var c;
  try {
    const a = req.query.a;
    const b = req.query.b;
    const c = req.query.c;

    if (!a || !b || !c) {
      res.status(400).send("Parameters not set properly! Error");
    }
    else {
      res.status(200).send('Triangle type: ' + getTriangleType(a, b, c));
    }
  }
  catch (error) {
    res.status(500).send(error);
  }
});

function getTriangleType(a,b,c) {
  return (a === b && b === c) && 'EQUILATERAL' ||
  (a === b || a === c || b === c) && 'ISOSCELES' ||
  'SCALENE';
}

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});