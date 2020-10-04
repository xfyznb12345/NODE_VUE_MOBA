const express = require('express')

const app = express()

app.set('secret', 'i2u34y12oi3u4y8')

app.use(require('cors')())
app.use(express.json())

require('./plugins/db')(app)
require('./routes/admin')(app)
app.use('/uploads', express.static(__dirname + '/uploads'))


app.listen(3000,()=>{
  console.log('http://localhost:3000');
})