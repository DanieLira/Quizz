import React from "react"
import QuizParametersSelector from "./QuizParametersSelector"

export default function IntroPage(props){
    //TODO: ADD DARK MODE
    return(
        <div className="flex flex-col items-center">
            <h2 className="text-4xl font-semibold my-6 dark:text-slate-100">Quizzical</h2>
            <h5 className="text-base font-normal my-6 dark:text-slate-100">Lets celebrate my first React project with a nice quiz! <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">🥳</a></h5>
            <QuizParametersSelector setQuiz={data => props.setQuiz(data)}/>
        </div>
    )
}
