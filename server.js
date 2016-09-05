var express = require('express')

var app = express()
  
  app.use( require('./controllers/static'))

  app.listen(3000, function () {
  console.log('JSOP server started', 3000)
})