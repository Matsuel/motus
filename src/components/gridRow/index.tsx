import { useAtomValue } from 'jotai'
import { generateArray } from '../../helpers/genericHelpers'
import { setColorForLetter, setGoodColor } from '../../helpers/setColorForLetter'
import '../grid/grid.css'
import { attemptsRemainingAtom, currentWordAtom, wordTestAtom } from '../../atoms/gameDatas'

interface GridRowProps {
    word: string
    loopIndex: number
    attempts: number
}

const GridRow = ({
    word,
    loopIndex,
    attempts,
}: GridRowProps) => {

    const attemptsRemaining = useAtomValue(attemptsRemainingAtom)
    const wordTest = useAtomValue(wordTestAtom)
    const currentWord = useAtomValue(currentWordAtom)

    return (
        <div className="grid__row" >
            {generateArray(word.length).map((_, index) => (
                <div key={index} className="grid__item"
                    style={{
                        backgroundColor: setGoodColor(word, wordTest, loopIndex, index),
                        borderColor: setGoodColor(word, wordTest, loopIndex, index)

                    }}
                >
                    <span className='grid__item__letter'
                        style={{ backgroundColor: setColorForLetter(word, wordTest, loopIndex, index) }}
                    >
                        {loopIndex === attempts - attemptsRemaining ? currentWord[index] :
                            wordTest[loopIndex] ? wordTest[loopIndex][index] : ""}
                    </span>
                </div>
            ))}
        </div>
    )
}

export default GridRow