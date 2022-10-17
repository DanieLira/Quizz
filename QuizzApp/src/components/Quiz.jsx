import React from "react"
import Question from "./Question"
import "../styles/Quiz.css"

export default function Quiz(props){

    const [isQuizBeingChecked, setIsQuizBeingChecked] = React.useState(false)

    const questionElements = props.quiz.map((elem, index) => {
        return <Question key={index} question={elem} isBeingChecked={isQuizBeingChecked}/>
    })

    return(
        <div>
            {questionElements}
            <button className="quiz--check-answers-button">Check Answers</button>
        </div>
    )
}