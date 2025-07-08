import {
    isAlphabet,
} from "./helpers.js";

const scoreMatrix = (logMatrix, paragraph) => {
    console.log("Paragraph: ", paragraph);
    console.log("Logs: ", logMatrix);
    const checkMatrix = [];
    paragraph.map((sentence, sentenceIndex) => {
        sentence.map((character, charIndex) => {
            const isAlpha = isAlphabet(character);
            if(isAlpha && character === character.toUpperCase()) {
                checkMatrix.push('Shift')
                checkMatrix.push(character.toUpperCase())
                if(charIndex === sentence.length - 1 && paragraph.length > 1 && sentenceIndex !== paragraph.length - 1) {
                    checkMatrix.push('Enter')
                }
            }
            else if (isAlpha === false && character !== ' ') {
                checkMatrix.push('Shift')
                checkMatrix.push(character)
                if(charIndex === sentence.length - 1 && paragraph.length > 1 && sentenceIndex !== paragraph.length - 1) {
                    checkMatrix.push('Enter')
                }
            }
            else if (character === character.toLowerCase() ) {
                checkMatrix.push(character)
                if(charIndex === sentence.length - 1 && paragraph.length > 1 && sentenceIndex !== paragraph.length - 1) {
                    checkMatrix.push('Enter')
                }
            }

        })
    })
    console.log(checkMatrix);
}

// const calculateScore = (logMatrix, checkMatrix) => {
//     if(logMatrix.length <  checkMatrix.length)
//     {
//         logMatrix.map((log, index) => {
//             if(log !== checkMatrix[index])
//             {
//
//             }
//         })
//     }
// }

export default scoreMatrix;
