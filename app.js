require("dotenv").config()

const express = require('express')

const app = express()

const connectToDb = require('./config/db.config')
const movieRoute = require("./routes/movie.routes")
const userRoute = require("./routes/user.routes")

app.use(express.json())

app.use("/", movieRoute)
app.use("/", userRoute)


connectToDb.then(() => {
    app.listen(3000, () => console.log(`Sevidor subiu com sucesso`))
}).catch((err) => {
    console.log(err);
    process.exit(5) // Erro fatal
})