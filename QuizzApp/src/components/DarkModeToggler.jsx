import React from "react"

export default function DarkModeToggler(props){
    const STL_TOGGLER = "fixed top-5 left-5 cursor-pointer rounded-md w-fit px-3 bg-indigo-600 text-slate-100"
    
    return(
        <div className={STL_TOGGLER} onClick={props.toggleDarkMode}>
            <p>{`Darkmode: ${props.darkMode ? "ON" : "OFF"}`}</p>
        </div>
    )
}