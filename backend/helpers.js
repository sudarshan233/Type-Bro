
export const isAlphabet = (character) => {
    return /[a-zA-Z]/.test(character);
}

export const calculateParaLength = (paragraph) => {
    const sentencesLength = paragraph.reduce((previousValue, currentValue, currentIndex,arr) => {return previousValue + arr[currentIndex].length
    }, 0)
    return sentencesLength;
}