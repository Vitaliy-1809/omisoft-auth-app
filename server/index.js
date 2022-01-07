const express = require('express')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 8000

app.use(express.static(__dirname + '/public'))

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`)
})