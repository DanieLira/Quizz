import React from "react"
import Answer from "./Answer"

export default function Question(props){

    const [selectedAnswer, setSelectedAnswser] = React.useState("")

    function changeSelected(event){
        const {name} = event.target
        setSelectedAnswser(name)
    }

    let incorrectAnswers = props.data.incorrect_answers.map((elem, index)=> {
        return <Answer 
                    key={index}
                    handleClick={changeSelected}
                    selected={elem === selectedAnswer}
                    description={elem} 
                    isCorrect={false}
                    isBeingChecked={props.isBeingChecked}
                />
    })

    //TODO: Insert the correct answer into the array at a random index, or randomize the order at the end.
    const correctAnswer =   <Answer 
                                key={incorrectAnswers.length}
                                handleClick={changeSelected}
                                selected={props.data.correct_answer === selectedAnswer}
                                description={props.data.correct_answer} 
                                isCorrect={true}
                                isBeingChecked={props.isBeingChecked}
                            />

    let answerElements = incorrectAnswers.slice()
    const randomIndex = Math.floor(Math.random() * (incorrectAnswers.length - 0)) + 1
    answerElements.splice(randomIndex, 0, correctAnswer)

    const questionDescription = props.data.question.replaceAll("&quot;",'"').replaceAll("&#039;","'")

    return(
        <div>
            <h3 className="question--description">{questionDescription}</h3>
            {answerElements}
            <hr/>
        </div>
    )
}