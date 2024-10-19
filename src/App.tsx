import { useEffect } from "react"
import Grid from "./components/grid"
import Keyboard from "./components/keyboard"
import useWord from "./hooks/useWord"
import { useAtom } from "jotai"
import {
  attemptsRemainingAtom,
  currentWordAtom,
  wordTestAtom
} from "./atoms/gameDatas"
import Header from "./components/header"

function App() {

  const attempts = 6

  const { word, loading, error } = useWord()
  const [currentWord, setCurrentWord] = useAtom(currentWordAtom)
  const [attemptsRemaining, setAttemptsRemaining] = useAtom(attemptsRemainingAtom)
  const [wordTest, setWordTest] = useAtom(wordTestAtom)

  const checkWord = () => {
    if (currentWord.length === word.length) {
      if (currentWord.toLowerCase() === word.toLowerCase()) {
        setAttemptsRemaining(attemptsRemaining - 1)
        setWordTest([...wordTest, currentWord])
        setCurrentWord("")
        setTimeout(() => {
          if (window.confirm("Gagné !")) {
            setCurrentWord("")
            setAttemptsRemaining(attempts)
            setWordTest([])
            window.location.reload()
          }
        }, 300)
      } else if (currentWord.toLowerCase() !== word.toLowerCase()) {
        setAttemptsRemaining(attemptsRemaining - 1)
        setWordTest([...wordTest, currentWord])
        setCurrentWord(word[0].toUpperCase())
      }
    }
  }

  useEffect(() => {
    if (attemptsRemaining === 0) {
      alert("Perdu")
      setCurrentWord("")
      setAttemptsRemaining(attempts)
      setWordTest([])
    }
  }, [currentWord])

  const deleteLetter = () => {
    const oldWord = currentWord
    if (oldWord.length <= 1) return
    setCurrentWord(oldWord.slice(0, -1))
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key;

      // Check if the key is a letter
      if (/^[a-zA-Z]$/.test(key) && currentWord.length < word.length) {
        const oldWord = currentWord;
        setCurrentWord(oldWord + key.toUpperCase());
      } else if (key === "Enter") {
        checkWord();
      } else if (key === "Backspace") {
        deleteLetter();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentWord]);

  if (loading) return <div>Loading...</div>

  return (
    <div className="app">

      <Header
        word={word}
        attemptsRemaining={attemptsRemaining}
        error={error}
      />

      <Grid
        word={word}
        attempts={attempts}
      />

      <Keyboard
        word={word}
        checkWord={checkWord}
      />

    </div>
  )
}

export default App