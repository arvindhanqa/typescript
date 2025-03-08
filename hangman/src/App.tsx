import { useCallback, useEffect, useState } from "react"
import words from "./wordList.json"
import { HangmanDrawing } from "./HangmanDrawing"
import { HangmanWord } from "./HangmanWord"
import { HangmanKeyboard } from "./HangmanKeyboard"

function getWord(){
  return words[Math.floor(Math.random() * words.length)]

}
function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord)

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetters = guessedLetters.filter( letter =>!wordToGuess.includes(letter))

  const isLoser =incorrectLetters.length >= 6

  const isWinner =wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter)|| isLoser || isWinner) return
    setGuessedLetters (curretLetters => [...curretLetters,letter])
  }, [guessedLetters, isWinner, isLoser])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (!key.match(/^[a-z]$/)) return
      e.preventDefault()
      addGuessedLetter(key)
      
    }

    document.addEventListener("keypress", handler)
    return () => {
      document.removeEventListener("keypress", handler)
    }
  },[guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
      if (key !== "Enter") return
      e.preventDefault()
      setGuessedLetters([])
      setWordToGuess(getWord())
      
    }

    document.addEventListener("keypress", handler)
    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])
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
    <div style = {{ fontSize: "2rem", textAlign: "center" }}>
      { isWinner && "Great Job Winning! - Refresh Page to Restart the Game!"}
      { isLoser && "You Lost! - Refresh Page to Restart the Game!"}
    </div>
    <HangmanDrawing numberOfGuesses = {incorrectLetters.length} />
    <HangmanWord reveal = {isLoser} guessedLetters = {guessedLetters} wordToGuess ={wordToGuess}/>
    <div style = {{ alignSelf : "stretch"}} >
    <HangmanKeyboard 
    disabled = {isWinner || isLoser}
    activeLetters ={guessedLetters.filter(letter => wordToGuess.includes(letter))} 
      inactiveLetters = {incorrectLetters}
      addingGuessedLetter = {addGuessedLetter}
      />
    </div>
    </div>
  )
}

export default App
