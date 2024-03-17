import express from "express";

const app = express()

app.use(() => {
    console.log("Use request")
})

app.listen(3000, () => {
    console.log("Listening")
})
