import React from "react"
import Question from "./Question"
import "../styles/Quiz.css"

export default function Quiz(props){

    const [isQuizBeingChecked, setIsQuizBeingChecked] = React.useState(false)
    const [score, setScore] = React.useState(0)
    const [quiz, setQuiz] = React.useState([])

    React.useEffect(()=>{
        fetch(props.url)
          .then(data => data.json())
          .then(dataAsJson => setQuiz(dataAsJson.results))
    },[])

    function handleScore(isCorrect, hasQuestionBeenAnsweredCorrectly){
        setScore(prevScore => {
            if(isCorrect && !hasQuestionBeenAnsweredCorrectly)
                return prevScore + 1

            if(!isCorrect && hasQuestionBeenAnsweredCorrectly)
                return prevScore - 1
            
            return prevScore            
        })
    }

    const questionElements = quiz.map((elem, index) => {
        return (
            <Question 
                key={index} 
                data={elem} 
                isBeingChecked={isQuizBeingChecked}
                handleScore={handleScore}
            />
        )
    })

    function checkQuiz(){
        setIsQuizBeingChecked(prevState => !prevState)
    }

    const checkAnswersButton = ( 
        <button className="quiz--check-answers-button" onClick={checkQuiz}>
            Check Answers
        </button>
    )
    
    const playAgainButton = (
        <>
            <h4>You scored {score}/{questionElements.length} correct answers</h4>
            <button className="quiz--check-answers-button" onClick={props.setQuiz}>Play Again</button>
        </>
    )

    return(
        <div>
            {quiz.length === 0 ? 
            <h1>Loading...</h1> : 
            <>
                {questionElements}
                {isQuizBeingChecked ? playAgainButton : checkAnswersButton}
            </>
            }
        </div>
    )
}