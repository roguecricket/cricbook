var express = require('express')
var app = express()

app.use('/js', express.static('public/js'))

app.get('/', function (req, res) {
  res.sendfile(__dirname + "/public/index.html");
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port ', process.env.PORT || 3000)
})
