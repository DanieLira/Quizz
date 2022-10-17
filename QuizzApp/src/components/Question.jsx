import React from "react"
import Answer from "./Answer"

export default function Question(props){
    
    let answerElements = props.question.incorrect_answers.map((elem, index)=> {
        return <Answer 
                    key={index} 
                    description={elem} 
                    isCorrect={false}
                    selected={false}
                    isBeingChecked={props.isBeingChecked}
                />
    })

    answerElements.push(
        <Answer 
            key={answerElements.length} 
            description={props.question.correct_answer} 
            isCorrect={true}
            selected={false}
            isBeingChecked={props.isBeingChecked}
        />
    )
    
    return(
        <div>
            <h3 className="question--description">{props.question.question}</h3>
            {answerElements}
            <hr/>
        </div>
    )
}