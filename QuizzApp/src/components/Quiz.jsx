import React from "react"
import Question from "./Question"

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
        <div className="w-full flex justify-center">
            <button className="bg-indigo-600 w-72 h-14 rounded-2xl text-white my-4 text-xl" onClick={checkQuiz}>
                Check Answers
            </button>
        </div>
    )
    
    const playAgainButton = (
        <div className="w-full flex  flex-col items-center">
            <h4 className="dark:text-slate-100">You scored {score}/{questionElements.length} correct answers</h4>
            <button className="bg-indigo-600 w-72 h-14 rounded-2xl text-white my-4 text-xl" onClick={props.setQuiz}>Play Again</button>
        </div>
    )

    return(
        <div className="flex flex-col">
            {quiz.length === 0 ? 
            <h1 className="text-3xl font-bold text-indigo-400">Loading...</h1> : 
            <>
                {questionElements}
                {isQuizBeingChecked ? playAgainButton : checkAnswersButton}
            </>
            }
        </div>
    )
}