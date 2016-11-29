var express = require('express')
var app = express()

app.get('/echo/:text', function (req, res) {
    res.send(req.params.text);  
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})