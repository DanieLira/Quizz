import React from "react"
import Answer from "./Answer"

export default function Question(props){

    const [selectedAnswer, setSelectedAnswser] = React.useState("")

    function changeSelected(event){
        const {name} = event.target
        setSelectedAnswser(name)
    }

    let answerElements = props.data.incorrect_answers.map((elem, index)=> {
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
    answerElements.push(
        <Answer 
            key={index}
            handleClick={changeSelected}
            selected={elem === selectedAnswer}
            description={elem} 
            isCorrect={false}
            isBeingChecked={props.isBeingChecked}
        />
    )
    
    return(
        <div>
            <h3 className="question--description">{props.data.question}</h3>
            {answerElements}
            <hr/>
        </div>
    )
}