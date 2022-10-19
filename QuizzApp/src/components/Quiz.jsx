import React from "react"
import Question from "./Question"
import "../styles/Quiz.css"

export default function Quiz(props){

    const [isQuizBeingChecked, setIsQuizBeingChecked] = React.useState(false)
    const [score, setScore] = React.useState(0)
    const [quiz, setQuiz] = React.useState([])

    React.useEffect(()=>{
        console.log("Calling API")
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
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
        return <Question 
            key={index} 
            data={elem} 
            isBeingChecked={isQuizBeingChecked}
            handleScore={handleScore}
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
            {quiz.length === 0 ? <h1>Loading...</h1> : questionElements}
            {quiz.length !== 0 && button}
        </div>
    )
}