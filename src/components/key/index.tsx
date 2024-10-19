import './key.css'

interface KeyProps {
    disabled?: boolean
    letter: string
    setCurrentWord: (word: string) => void
}

const Key = ({
    disabled = false,
    letter,
    setCurrentWord,
}: KeyProps) => {
    return (
        <button
            className={`keyboard__key ${disabled ? 'key__disabled' : ''}`}
            onClick={() => setCurrentWord(letter)}
        >
            {letter.toUpperCase()}
        </button>
    )
}

export default Key