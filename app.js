const bodyParser = require("body-parser")
const express = require("express")
const exphbs = require("express-handlebars")
const port = 3000

const routes = require('./routes/index')

require("./config/mongoose")

const app = express()

// body - parser
app.use(express.urlencoded({extended: true}))

app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }))
app.set("view engine", "hbs")

app.use(routes)

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})




// routes