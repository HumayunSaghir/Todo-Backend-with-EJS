const express = require("express")
const path = require("path")
const userRouter = require("./routes/users")
const createLogs = require("./middlewares/logs")
const databaseConnection = require("./connection")

const app = express()
const port = 8000

databaseConnection("mongodb://127.0.0.1:27017/todo_backend")
    .then(() => console.log("database connected!"))
    .catch((err) => console.log("error in database connection!"))
    
app.use(createLogs("./logs.txt"))

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use("/users", userRouter)

app.listen(port, () => console.log(`server is listening at the port ${port}`))