const mongoose = require("mongoose")



const quizScema =new mongoose.Schema({
    category:{
        type:String,
    },
    correct_answer:{
        type:String,
    },
    difficulty:{
        type:String,
    },
    question:{
        type:String,
    },
    incorrect_answers:[],
    type:{
        type:String
    }
})


const QuizModel = mongoose.model("quizz",quizScema)

module.exports = QuizModel