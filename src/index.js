// https://opentdb.com/api.php?amount=10
// https://opentdb.com/api.php?amount=10&category=9
// https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple
const express =  require("express")
const cors = require("cors");
const mongoose = require("mongoose");
const QuizModel = require("../model/QuizModel")

const App = express()

App.use(cors());
App.use(express.json())


App.get("/",async(req,res)=>{
    res.send("Home")
})


// App.post("/create", async(req,res)=>{
//     console.log(req.body)
//     try {
//         let data = await QuizModel.create(req.body)
//         res.send(data)
//     } catch (error) {
//         console.log(error)
//         res.status(400).send(error)
//     }
// })

App.get("/quiz",async(req,res)=>{
    const {amount,category,difficulty} = req.query
    let temp = {}
    if(category)temp = {...temp,category}
    if(difficulty)temp = {...temp,difficulty}
        console.log(temp,req.query)
    try {
        let data = await QuizModel.find(temp).limit(amount || 10)
        // console.log(data)
        res.send(data)
    } catch (error) {
        res.status(400).send(error)
    }
})


App.listen(8000,async()=>{
    await mongoose.connect("mongodb+srv://dd:dd@cluster0.zsszidp.mongodb.net/quiz")
    console.log("Started on 8000")
})