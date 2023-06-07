let express = require('express');
let app = express();

app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  return res.sendFile(__dirname + "/views/index.html")
})

app.get('/json', (req, res) => {
  return res.json({ "message": process.env.MESSAGE_STYLE === 'uppercase' ? "HELLO JSON" : "Hello json" })
})

































module.exports = app;
