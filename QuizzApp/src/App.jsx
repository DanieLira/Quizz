import { useState, useEffect } from 'react'
import IntroPage from "./components/IntroPage"
import Quiz from "./components/Quiz"
import "./styles/App.css"

export default function App() {
  const [hasQuizStarted, setHasQuizStarted] = useState(false)
  
  function resetQuiz(){
    setHasQuizStarted(prevState => !prevState)
  }

  return (
    <div className="App">
      {hasQuizStarted ? 
        <Quiz setQuiz={resetQuiz}/> : 
        <IntroPage setQuiz={resetQuiz}/>
      }
    </div>
  )
}

