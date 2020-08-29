const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const router = express.Router();
const port = 3000

app.use(express.static(path.join(__dirname, 'html2pdf')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/templates', (req, res) => {
    res.sendFile(path.join(__dirname + '/pdf.html'));
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
