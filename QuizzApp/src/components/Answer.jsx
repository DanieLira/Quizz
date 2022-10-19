import React from "react"
import "../styles/Answer.css"

export default function Answer(props){

    function getCheckedClass(){
        if(props.isBeingChecked){
            if(props.isCorrect){
                return "checked-correct"
            }
            
            if(!props.isCorrect && props.selected){
                return "checked-selected-wrong"
            }

            return "checked-not-selected"
        }else{
            if(props.selected){
                return "not-check-selected"
            }
        }

    }
    
    const classes = `answer--button ${getCheckedClass()}`
    const answerDescription = props.description.replaceAll("&quot;",'"').replaceAll("&#039;","'").replaceAll("&rsquo;","’")

    return(
        <button 
            name={props.description}
            className={classes}
            onClick={ event => props.handleClick(event, props.isCorrect)}
            disabled={props.isBeingChecked}>  
            {answerDescription}
        </button>
    )
}