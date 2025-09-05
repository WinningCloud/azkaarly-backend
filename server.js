import express from "express"
import morningAzkaar from "./assets/morning.json" with { type: "json" };
import eveningAzkaar from "./assets/evening.json" with {type: "json"}
import "dotenv/config";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose"
import Bookmark from "./models/bookmarks.js";




console.log("Server running")
const app = express()
app.use(cors())
app.use(express.json());        // instead of bodyParser.json()
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
  useUnifiedTopology: true,
})
console.log("MongoDb Connected")


const port = process.env.PORT

app.post("/bookmarks", async (req, res) => {
    try{
        const newBookmark = new Bookmark(req.body);
        const saved = await newBookmark.save();
        res.json(saved);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
})

app.get("/bookmarks", async (req, res) => {
    try{
        const bookmarks = await bookmarks.find();
        res.json(bookmarks);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
})


app.delete("/bookmarks/:id", async (req, res) => {
    try{
        await bookmarks.findByIdAndDelete(req.params.id);
        res.json({message: "Deleted successfully"});
    }
    catch(err){
        res.status(500).json({errpr: err.message});
    }
})


app.listen(port || 4000, () =>{
    console.log("Listening on port ",port)
})

app.get("/azkaar/morning", (req, res)=>{
    res.json(morningAzkaar)
})

app.get("/azkaar/evening", (req, res) => {
    res.json(eveningAzkaar)
})