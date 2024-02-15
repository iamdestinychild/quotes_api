const express = require("express")
const bodyParser = require("body-parser")
const quotes = require("./routes/quotes.routes")

const app = express()

app.use(bodyParser.json())

app.use('/api/v1', quotes)

const port = 5000

app.listen(port, console.log(`sever is running on port ${port}`))