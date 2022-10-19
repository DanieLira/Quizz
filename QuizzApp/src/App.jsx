import { useState, useEffect } from 'react'
import IntroPage from "./components/IntroPage"
import Quiz from "./components/Quiz"
import "./styles/App.css"

function App() {
  const [hasQuizStarted, setHasQuizStarted] = useState(false)
  const [quiz, setQuiz] = useState([])

  useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then(data => data.json())
      .then(dataAsJson => setQuiz(dataAsJson.results))
  },[hasQuizStarted])

  function resetQuiz(){
    setHasQuizStarted(prevState => !prevState)
  }

  return (
    <div className="App">
      {hasQuizStarted ? <Quiz quiz={quiz} setQuiz={resetQuiz}/> : <IntroPage setQuiz={resetQuiz}/>}
    </div>
  )
}



export default App
