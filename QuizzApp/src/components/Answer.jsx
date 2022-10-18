import React from "react"
import "../styles/Answer.css"

export default function Answer(props){

    const checkedClass = props.isBeingChecked ? "check" : "not-check"
    const selectedClass = props.selected ? "not-check-selected" : ""
    const classes = `answer--button ${checkedClass} ${selectedClass}`
    
    return(
        <button 
            name={props.description}
            className={classes}
            onClick={ event => props.handleClick(event)}>
            {props.description}
        </button>
    )
}