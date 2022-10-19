import React from "react"
import Question from "./Question"
import "../styles/Quiz.css"

export default function Quiz(props){

    const [isQuizBeingChecked, setIsQuizBeingChecked] = React.useState(false)
    const [score, setScore] = React.useState(0)

    const questionElements = props.quiz.map((elem, index) => {
        return <Question 
            key={index} 
            data={elem} 
            isBeingChecked={isQuizBeingChecked}
        />
    })

    function checkQuiz(){
        setIsQuizBeingChecked(prevState => !prevState)
    }

    let button = <button className="quiz--check-answers-button" onClick={checkQuiz}>
                    Check Answers
                 </button>
    
    if (isQuizBeingChecked) {
      button =
      <>
        <h4>You scored {score}/5 correct answers</h4>
        <button className="quiz--check-answers-button" onClick={props.setQuiz}>Play Again</button>
      </>;
    } 

    return(
        <div>
            {questionElements}
            {button}
        </div>
    )
}