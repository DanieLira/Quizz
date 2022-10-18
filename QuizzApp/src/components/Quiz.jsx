import React from "react"
import Question from "./Question"
import "../styles/Quiz.css"

export default function Quiz(props){

    const [isQuizBeingChecked, setIsQuizBeingChecked] = React.useState(false)

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
        <h4>You scored 3/5 correct answers</h4>
        <button className="quiz--check-answers-button">Play Again</button>
      </>;
    } 

    return(
        <div>
            {questionElements}
            {button}
        </div>
    )
}