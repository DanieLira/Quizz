import React from "react"
import "../styles/IntroPage.css"

export default function IntroPage(props){
    return(
        <div className="intro-page--container">
            <h2 className="intro-page--title">Quizzical</h2>
            <h5 className="intro-page--description">Lets celebrate my first React project with a nice quiz! 🥳</h5>
            <button onClick={props.setQuiz} className="intro-page--button">Start Quiz</button>
        </div>
    )
}