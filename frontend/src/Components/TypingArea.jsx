import Sentence from "./Sentence.jsx";
import {useState} from "react";


const TypingArea = (props) => {
    const paragraph = [
        ['I', ' ', 'a', 'm', ' ', 'B', 'a', 't', 'm', 'a', 'n'],
        ['Y', 'o', 'u', ' ', 'a', 'r', 'e', '?'],
    ]
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
                            input={props.typed}
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