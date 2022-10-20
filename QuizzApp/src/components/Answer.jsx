import React from "react"

export default function Answer(props){

    function getButtonClass(){
        if(props.isBeingChecked){

            if(props.isCorrect) return "bg-green-300 dark:text-slate-800"
            
            if(!props.isCorrect && props.selected) return "bg-red-300 dark:text-slate-800"
            
            return "opacity-50"

        }else{

            if(props.selected) return "bg-indigo-400"

            return "border border-violet-900 hover:bg-indigo-200 dark:border-violet-200 dark:hover:bg-indigo-400"
        }
    }

    function sanitizeString(text){
        return (
            text.replaceAll("&quot;",'"')
            .replaceAll("&#039;","'")
            .replaceAll("&rsquo;","'")
            .replaceAll("&aacute;","á")
            .replaceAll("&eacute;","é")
            .replaceAll("&iacute;","í")
            .replaceAll("&oacute;","ó")
            .replaceAll("&uacute;","ú")
        )
    }
    
    const classes = `${getButtonClass()}`
    
    const answerDescription = sanitizeString(props.description)

    return(
        <button 
            name={props.description}
            className={`${classes} rounded-lg w-auto h-7 mx-4 px-8 dark:text-slate-100`}
            onClick={ event => props.handleClick(event, props.isCorrect)}
            disabled={props.isBeingChecked}>  
            {answerDescription}
        </button>
    )
}