import React from 'react'
interface GameRowProps {
    user_guess: string;
    secret_word: string;
  }
  
  const GameRow: React.FC<GameRowProps> = ({ user_guess, secret_word }) => {
    const calculateResult = (user_guess: string, secret_word: string, index: number) => {
      const letter = user_guess[index];
      if (!letter) return 'gray';
  
      const correctLetter = secret_word[index];
      if (letter === correctLetter) {
        return 'green'; // Correct letter in the correct position
      } else if (secret_word.includes(letter)) {
        return 'yellow'; // Correct letter in the wrong position
      } else {
        return 'gray'; // Letter is not in the word
      }
    };
  
    return (
      <div className="flex gap-2">
        {secret_word.split('').map((letter, index) => (
          <div
            key={index}
            className={'px-4 py-2 bg-gray-200 rounded-lg text-center uppercase text-lg font-semibold'}
            style={{ backgroundColor: calculateResult(user_guess, secret_word, index) }}
          >
            {user_guess[index]}
          </div>
        ))}
      </div>
    );
  };
  
  export default GameRow;