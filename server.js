const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('public'))
app.use('/', require('./routes/htmlRoutes'))
app.use('/api', require('./routes/apiRoutes'))

app.listen(PORT, ()=>{
    console.log(`You are now connected to port: ${PORT}`)
})