
interface KeyboardTrackerProps {
    guessedLetters: Set<string>;
    secretWord: string;
  }

const KeyboardTracker: React.FC<KeyboardTrackerProps> = ({ guessedLetters, secretWord }) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  
    const isGuessed = (letter: string) => guessedLetters.has(letter);
    const isInSecretWord = (letter: string) => secretWord.includes(letter);
  
    const getLetterStyle = (letter: string) => ({
      opacity: isGuessed(letter) && !isInSecretWord(letter) ? 0.25 : 1,
      backgroundColor: isGuessed(letter) && isInSecretWord(letter) ? 'green' : 'gray'
    });
  
    return (
        <div className="flex flex-wrap justify-center gap-2">
          {alphabet.split('').map((letter) => (
            <span
              key={letter}
              style={getLetterStyle(letter)}
              className="p-4 bg-gray-200 rounded-lg text-center uppercase text-lg font-semibold cursor-pointer transition-opacity duration-300 hover:opacity-75"

            >
              {letter}
            </span>
          ))}
        </div>
      );
    };
  
  export default KeyboardTracker;