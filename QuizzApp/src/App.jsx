import React from 'react'
import IntroPage from "./components/IntroPage"
import Quiz from "./components/Quiz"
import DarkModeToggler from "./components/DarkModeToggler"
import "./styles/App.css"

export default function App() {
  const [hasQuizStarted, setHasQuizStarted] = React.useState(false)
  const [apiUrl, setApiUrl] = React.useState("")
  const [darkMode, setDarkMode] = React.useState(false)
  
  function toggleDarkMode(){
    setDarkMode(prevState => !prevState)
  }

  React.useEffect(() => {
    const style = darkMode ? "dark" : ""
    document.getElementById("htmlTag").className = style;
  },[darkMode])

  function resetQuiz(quizParameters){
    buildApiUrl(quizParameters)
    setHasQuizStarted(prevState => !prevState)
  }

  function buildApiUrl(data){
    const _category = data.category !== "any" ? `&category=${data.category}` : ""
    const _difficulty = data.difficulty !== "any" ? `&difficulty=${data.difficulty}` : ""

    console.log(data.numberOfQuestions)
    const newUrl = `https://opentdb.com/api.php?amount=${data.numberOfQuestions}${_category}${_difficulty}`   

    setApiUrl(newUrl)
  }

  return (
    <div className="bg-slate-100 dark:bg-slate-800">
      <DarkModeToggler darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <div className='flex items-center justify-center h-screen'>
        {hasQuizStarted ? 
          <Quiz setQuiz={resetQuiz} url={apiUrl}/> : 
          <IntroPage setQuiz={resetQuiz}/>
        }
      </div>
    </div>
  )
}

