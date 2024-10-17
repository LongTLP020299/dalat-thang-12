const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/trips', (req, res) => {
  fs.readFile('./data/trips.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send(err);
    res.send(JSON.parse(data));
  });
});

app.post('/trips', (req, res) => {
  fs.readFile('./data/trips.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send(err);
    const trips = JSON.parse(data);
    trips.push(req.body);
    fs.writeFile('./data/trips.json', JSON.stringify(trips), (err) => {
      if (err) return res.status(500).send(err);
      res.status(201).send(req.body);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
