var express = require('express')
var app = express()

app.get('/:text', function (req, res) {
    res.send(req.params.text.toUpperCase());  
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!')
})