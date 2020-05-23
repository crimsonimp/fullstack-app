const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res, next) => res.send('Hello'));

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
