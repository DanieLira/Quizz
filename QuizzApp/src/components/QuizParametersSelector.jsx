import React from "react"

export default function QuizParametersSelector(props) {
    const INPUT_STL = "w-full border-2 border-indigo-800 p-2"
    const [parametersData, setParametersData] = React.useState({
        numberOfQuestions: "5",
        category: "any",
        difficulty: "any"
    })

    function handleChange(event) {
        const { name, value } = event.target
        let valueToSet = value

        if(name === "numberOfQuestions" && (valueToSet > 5 || valueToSet < 1))
            valueToSet = 5
        
        setParametersData(prevParameters => {
            return {
                ...prevParameters,
                [name]: valueToSet
            }
        })
    }

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
                <div className="w-full flex flex-col items-start">
                    <label className="my-2 dark:text-slate-100" htmlFor="difficulty">Difficulty:</label>
                    <select
                        id="difficulty"
                        value={parametersData.difficulty}
                        onChange={handleChange}
                        name="difficulty"
                        className={INPUT_STL}
                    >
                        <option value="any">Any Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <div className="my-5 w-full flex flex-col items-start">
                    <label className="my-2 dark:text-slate-100" htmlFor="numberOfQuestions">Number of questions:</label>
                    <input
                        id="numberOfQuestions"
                        name="numberOfQuestions"
                        type="number"
                        onChange={handleChange}
                        value={parametersData.numberOfQuestions}
                        min="1"
                        max="5"
                        className={INPUT_STL}
                    />
                </div>
                <div className="w-full flex flex-col items-start">
                    <label className="my-2 dark:text-slate-100" htmlFor="category">Category:</label>
                    <select
                        id="category"
                        value={parametersData.category}
                        onChange={handleChange}
                        name="category"
                        className={INPUT_STL}
                    >
                        <option value="any">Any Category</option>
                        <option value="9">General Knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainment: Film</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">Entertainment: Musicals &amp; Theatres</option>
                        <option value="14">Entertainment: Television</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="16">Entertainment: Board Games</option>
                        <option value="17">Science &amp; Nature</option>
                        <option value="18">Science: Computers</option>
                        <option value="19">Science: Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                        <option value="29">Entertainment: Comics</option>
                        <option value="30">Science: Gadgets</option>
                        <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                        <option value="32">Entertainment: Cartoon &amp; Animations</option>
                    </select>
                </div>
            </div>
            <button
                onClick={() => props.setQuiz(parametersData)}
                className="bg-indigo-600 w-72 h-14 rounded-2xl text-white my-12 text-xl hover:bg-indigo-500"
            >
                Start Quiz
            </button>
        </div>
    )
}
