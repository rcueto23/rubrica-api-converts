const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

const convertRouter = require("./routes/convert.route")(express);

app.use("/convert", convertRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})