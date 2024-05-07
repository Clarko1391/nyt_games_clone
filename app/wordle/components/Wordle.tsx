'use client'

import BackToGames from "../../components/BackToGames";
import { useState } from 'react'
import WordRow from "./WordRow";
import GuessInput from "./GuessInput";
import KeyboardTracker from "./KeyboardTracker";
import DummyRow from "./DummyRow";

const getSecretWord = (arr: string[]): string => {
    const random_index = Math.floor(Math.random() * arr.length)
    return arr[random_index]
}

const Wordle = ({
  secret_words
} : {
  secret_words: string[]
}) => {
  const [guess, setGuess] = useState<string>('');
  const [guesses, setGuesses] = useState<string[]>([]);
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [secretWord] = useState<string>(getSecretWord(secret_words)); // Sample secret word
  const [allow_reset, setAllowReset] = useState<boolean>(false)


  const handleResetGame = () => {
    // Reset game
    setGuess('');
    setGuesses([])
    setGuessedLetters(new Set());
  }

  const handleGuess = () => {
    if(guesses.length <= 4){
      // Check if guess is correct
      if (guess === secretWord) {
        setGuesses([...guesses, guess])
        setAllowReset(true)
      } else {
        // Update guessed letters
        const newGuessedLetters = new Set(guessedLetters);
        guess?.split('').forEach(letter => newGuessedLetters.add(letter));
        setGuessedLetters(newGuessedLetters);
        setGuesses([...guesses, guess])
        // Clear guess input
        setGuess('');
      }
    } else {
      alert('OUT OF GUESSES')
    }
   
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="max-w-5xl w-full flex items-center justify-between font-mono text-sm">
        <h1>Wordle</h1>
        {allow_reset && <button onClick={handleResetGame}>Play Again</button>}
        <BackToGames />
      </div>

      <div className="mt-8 w-full max-w-md">
        {(guesses[0] && guesses[0] !== '') ? <WordRow user_guess={guesses[0]} secret_word={secretWord}/> : <DummyRow />}
        {(guesses[1] && guesses[1] !== '') ? <WordRow user_guess={guesses[1]} secret_word={secretWord}/> : <DummyRow />}
        {(guesses[2] && guesses[2] !== '') ? <WordRow user_guess={guesses[2]} secret_word={secretWord}/> : <DummyRow />}
        {(guesses[3] && guesses[3] !== '') ? <WordRow user_guess={guesses[3]} secret_word={secretWord}/> : <DummyRow />}
        {(guesses[4] && guesses[4] !== '') ? <WordRow user_guess={guesses[4]} secret_word={secretWord}/> : <DummyRow />}
        <GuessInput
          guess={guess}
          setGuess={setGuess}
          onGuess={handleGuess}
        />
        <KeyboardTracker
          guessedLetters={guessedLetters}
          secretWord={secretWord}
        />
      </div>
    </main>
  );
}


export default Wordle;