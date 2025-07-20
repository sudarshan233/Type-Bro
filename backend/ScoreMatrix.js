import {
    isAlphabet,
} from "./helpers.js";
import {model} from "./Models/model.js";

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
    const errors = model(logMatrix, checkMatrix,
        `The keys typed by the user is given as logMatrix and checkMatrix is the correct version of
        sequence of keys that needs to be typed. Log Matrix: ${logMatrix} Check Matrix: ${checkMatrix}. Please
    tell me the places where I have made a mistake.`);
    console.log(errors);
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
