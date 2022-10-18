import React from "react"
import "../styles/Answer.css"

export default function Answer(props){


    let checkedClass
    if(props.isBeingChecked){
        if(props.isCorrect){
            checkedClass = "checked-correct"
        }
        
        if(!props.isCorrect && props.selected){
            checkedClass = "checked-selected-wrong"
        }
    }else{
        if(props.selected){
            checkedClass = "not-check-selected"
        }
    }

    const classes = `answer--button ${checkedClass}`
    
    return(
        <button 
            name={props.description}
            className={classes}
            onClick={ event => props.handleClick(event)}>
            {props.description}
        </button>
    )
}