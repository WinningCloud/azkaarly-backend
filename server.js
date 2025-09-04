import express from "express"
import morningAzkaar from "./assets/morning.json" with { type: "json" };
import eveningAzkaar from "./assets/evening.json" with {type: "json"}
import "dotenv/config";


console.log("Server running")
const app = express()
const port = process.env.PORT

app.listen(port || 4000, () =>{
    console.log("Listening on port ",port)
})

app.get("/azkaar/morning", (req, res)=>{
    res.json(morningAzkaar)
})

app.get("/azkaar/evening", (req, res) => {
    res.json(eveningAzkaar)
})