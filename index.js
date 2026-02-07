const express = require("express")

// setting up app
const app = express()
const port = 8000

app.listen(port, () => console.log(`server is listening at the port ${port}`))