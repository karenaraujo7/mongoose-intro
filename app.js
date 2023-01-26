const express = require('express')

const app = express()

const connectToDb = require('./config/db.config')
const movieRoute = require("./routes/movie.routes")

app.use(express.json())

app.use("/", movieRoute)


connectToDb.then(() => {
    app.listen(3000, () => console.log(`Sevidor subiu com sucesso`))
}).catch((err) => {
    console.log(err);
    process.exit(5) // Erro fatal
})