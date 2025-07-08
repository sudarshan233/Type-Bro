import Sentence from "./Sentence.jsx";

import scoreMatrix from "../../../backend/ScoreMatrix.js";
import {calculateParaLength} from "../../../backend/helpers.js";

const TypingArea = (props) => {
    const paragraph = [
        ['I', ' ', 'a', 'm', ' ', 'B', 'a', 't', 'm', 'a', 'n','\n','Y', 'o', 'u', ' ', 'a', 'r', 'e', '?'],
    ]
    const { typed, typedKeys } = props;

    const paragraphLength = calculateParaLength(paragraph);
    if(typed.length === paragraphLength)
    {
        scoreMatrix(typedKeys, paragraph);
    }
    let cumulativeIndex = 0;
    return (
        <section className="h-96 flex flex-col">
            <div className='flex flex-col justify-self-start mt-20 mb-20'>
                {paragraph.map((sentence, index) => {
                    const component = (
                        <Sentence
                            key={index}
                            sentenceId={index}
                            sentence={sentence}
                            paragraph={paragraph}
                            input={typed}
                            startIndex={cumulativeIndex}/>
                    )
                    cumulativeIndex += sentence.length;
                    return component;
                })}
            </div>
        </section>
    )
 }

 export default TypingArea;