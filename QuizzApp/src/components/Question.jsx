import React from "react"
import Answer from "./Answer"

export default function Question(props){

    const [selectedAnswer, setSelectedAnswser] = React.useState("")
    const [hasQuestionBeenAnsweredCorrectly, setHasQuestionBeenAnsweredCorrectly] = React.useState(false)
    const [randomIndex, setRandomIndex] = React.useState(0)

    function changeSelected(event, isCorrectAnswer){
        const {name} = event.target
        
        //If user is selecting the same answer, there is no need to update the score.
        if(name !== selectedAnswer){
            props.handleScore(isCorrectAnswer, hasQuestionBeenAnsweredCorrectly)
            setHasQuestionBeenAnsweredCorrectly(isCorrectAnswer)
        }
        
        setSelectedAnswser(name)
    }

    const answerElements = props.data.incorrect_answers.map((elem, index)=> {
        return (
            <Answer 
                key={index}
                handleClick={changeSelected}
                selected={elem === selectedAnswer}
                description={elem} 
                isCorrect={false}
                isBeingChecked={props.isBeingChecked}
            />
        )
    })

    const correctAnswer = (
        <Answer 
            key={answerElements.length}
            handleClick={changeSelected}
            selected={props.data.correct_answer === selectedAnswer}
            description={props.data.correct_answer} 
            isCorrect={true}
            isBeingChecked={props.isBeingChecked}
        />
    )
    
    const questionDescription = props.data.question.replaceAll("&quot;",'"').replaceAll("&#039;","'").replaceAll("&rsquo;","'")
    
    //Insert the correct answer into a random position
    answerElements.splice(randomIndex, 0, correctAnswer)

    React.useEffect(() => {
        const _randomIndex = Math.floor(Math.random() * (answerElements.length))
        setRandomIndex(_randomIndex)
    },[])

    return(
        <div>
            <h3 className="question--description">{questionDescription}</h3>
            {answerElements}
            <hr/>
        </div>
    )
}


    
    
    //function shuffleAnswers(answers) {
    //     let _suffledAnswers = answers
    //     for (let i = answers.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [_suffledAnswers[i], _suffledAnswers[j]] = [_suffledAnswers[j], _suffledAnswers[i]];
    //     }
    //     return _suffledAnswers
    // }

    // const suffledAnswers = shuffleAnswers(answerElements)