import { generateArray } from '../../helpers/genericHelpers'
import GridRow from '../gridRow'
import './grid.css'

interface GridProps {
    word: string
    attempts?: number
}

const Grid = ({
    word,
    attempts = 6,
}: GridProps) => {


    return (
        <div className="grid">
            {generateArray(attempts).map((_, index) => (
                <GridRow
                    key={index}
                    word={word}
                    loopIndex={index}
                    attempts={attempts}
                />
            ))}
        </div>
    )

}

export default Grid