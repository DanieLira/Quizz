import React from 'react'
import IntroPage from "./components/IntroPage"
import Quiz from "./components/Quiz"
import "./styles/App.css"

export default function App() {
  const [hasQuizStarted, setHasQuizStarted] = React.useState(false)
  const [apiUrl, setApiUrl] = React.useState("")
  
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
    <div className="App">
      {hasQuizStarted ? 
        <Quiz setQuiz={resetQuiz} url={apiUrl}/> : 
        <IntroPage setQuiz={resetQuiz}/>
      }
    </div>
  )
}

