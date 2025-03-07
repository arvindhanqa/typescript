import { useState } from "react"
import words from "./wordList.json"
import { HangmanDrawing } from "./HangmanDrawing"
import { HangmanWord } from "./HangmanWord"
import { HangmanKeyboard } from "./HangmanKeyboard"

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    const randomIndex = Math.floor(Math.random() * words.length)
    return words[randomIndex]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  console.log(wordToGuess)
 return (
    <div
    style={
      {
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center"
      }
    }
    >
    <div style = {{ fontSize: "2rem", textAlign: "center" }}>Lose Win</div>
    <HangmanDrawing />
    <HangmanWord />
    <HangmanKeyboard />
    </div>
  )
}

export default App
