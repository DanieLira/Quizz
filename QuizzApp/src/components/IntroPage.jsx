import React from "react"
import QuizParametersSelector from "./QuizParametersSelector"
import "../styles/IntroPage.css"

export default function IntroPage(props){
    return(
        <div className="intro-page--container">
            <h1>TODO:</h1>
            <h5>Add style</h5>
            <h2 className="intro-page--title">Quizzical</h2>
            <h5 className="intro-page--description">Lets celebrate my first React project with a nice quiz! 🥳</h5>
            {/* <button onClick={props.setQuiz} className="intro-page--button">Start Quiz</button> */}
            <QuizParametersSelector setQuiz={data => props.setQuiz(data)}/>
        </div>
    )
}