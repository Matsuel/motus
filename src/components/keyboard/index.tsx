import { useAtom } from 'jotai'
import Key from '../key'
import './keyboard.css'
import { currentWordAtom } from '../../atoms/gameDatas'

interface KeyboardProps {
    word: string
    checkWord: () => void
}

const Keyboard = ({
    word,
    checkWord
}: KeyboardProps) => {

    const [currentWord, setCurrentWord] = useAtom(currentWordAtom)

    const handleChange = (letter: string) => {
        if (currentWord.length === word.length) return
        const oldWord = currentWord
        setCurrentWord(oldWord + letter.toUpperCase())
    }

    const deleteLetter = () => {
        const oldWord = currentWord
        if (oldWord.length <= 1) return
        setCurrentWord(oldWord.slice(0, -1))
    }

    const letters = 'abcdefghijklmnopqrstuvwxyz'

    return (
        <div className='keyboard'>

            {Array.from(letters).map((letter, index) => (
                <Key key={index} letter={letter} setCurrentWord={handleChange} />
            ))}

            <Key letter='⌫' setCurrentWord={deleteLetter} />
            <Key letter='✓' setCurrentWord={checkWord} />

        </div>
    )
}

export default Keyboard