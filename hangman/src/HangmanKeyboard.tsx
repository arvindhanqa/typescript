import { Key } from "react";
import styles from "./Keyboard.module.css";

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]
type KeyboardProps = {
    activeLetters: string[],
    disabled?: boolean,
    inactiveLetters: string[],
    addingGuessedLetter: (letter: string) => void,
}
export function HangmanKeyboard({activeLetters, disabled = false , inactiveLetters, addingGuessedLetter}: KeyboardProps){
    return <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(75px, 1fr))",
        gap: ".5rem",
    }}>
        {KEYS.map(key => {
            const isActive = activeLetters.includes(key)
            const isInactive = inactiveLetters.includes(key)

            return (
                <button onClick={()=>addingGuessedLetter(key)}  className ={`${styles.btn}  ${isActive ? styles.active: ""}
                ${isInactive ? styles.inactive: ""}
                `}
                disabled ={isActive||isInactive||disabled}
                 key ={key}>{key}</button>
            )
        })}
    </div>
    
}