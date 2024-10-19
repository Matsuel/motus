export const setColorForLetter = (word: string, wordTest: string[], loopIndex: number, index: number) => {
    if (wordTest[loopIndex]) {
        if (word.includes(wordTest[loopIndex][index].toLowerCase()) && wordTest[loopIndex][index].toLowerCase() !== word[index].toLowerCase()) {
            return "#FFA500"
        }
    }
}

export const setGoodColor = (word: string, wordTest: string[], loopIndex: number, index: number) => {
    if (wordTest[loopIndex]) {
        if (wordTest[loopIndex][index].toLowerCase() === word[index].toLowerCase()) {
            return "#ff0000"
        } else {
            return "#0055b3"
        }
    }
}