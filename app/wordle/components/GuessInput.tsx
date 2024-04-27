import React from 'react'

const GuessInput = ({ 
    guess, 
    setGuess,
    onGuess
}:{
    guess: string,
    setGuess: React.Dispatch<React.SetStateAction<string>>,
    onGuess: Function
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      // Allow only letters (a-z) and convert to lowercase
      const filteredValue = inputValue.replace(/[^a-z]/gi, '').toLowerCase();
      setGuess(filteredValue);
    };
  
    return (
        <div
            className='flex gap-2 w-100% space-between align-center m-4'
        >
            <input
                type="text"
                value={guess}
                onChange={handleChange}
                placeholder="Enter your guess..."
                className="px-4 py-2 bg-gray-200 rounded-lg text-center uppercase text-lg font-semibold h-auto"
            />
            <button 
                className="block mx-auto mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg uppercase font-semibold hover:bg-blue-600 transition-colors duration-300"
                onClick={() => onGuess()}
                >
                    Guess
                </button>
        </div>
      
    );
  };

export default GuessInput