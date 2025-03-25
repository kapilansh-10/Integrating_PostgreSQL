const express = require("express")
// const fs = require("fs")
const path = require("path")
const usersRouter = require("./routes/usersRouter")


const app = express()
const PORT = 8000;

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use("/", usersRouter)



app.listen(PORT,() => console.log(`Server is running on port ${PORT}`))