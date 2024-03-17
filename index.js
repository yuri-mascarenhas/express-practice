import express from "express";

const app = express()

app.get("/", (req, res) => {
    res.send("Welcome to the homepage")
})
app.get("/collaborators", (req, res) => {
    res.send([{name: "John Doe", company_id: 233, position: "Analyst"}, {name: "Gene Doe", company_id: 18, position: "Director Assistent"}])
})
app.get("/supply", (req, res) => {
    res.send([{type: "Notebook", collaborator: 18}])
})

app.listen(3000, () => {
    console.log("Listening")
})
