import React from "react"
import "../styles/Answer.css"

export default function Answer(props){
    const checkedClass = props.isBeingChecked ? "check" : "not-check"
    const classes = `answer--button ${checkedClass}`
    
    return(
        <button className={classes}>{props.description}</button>
    )
}