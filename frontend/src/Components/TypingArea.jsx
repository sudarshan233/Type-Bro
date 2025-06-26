import Sentence from "./Sentence.jsx";
import {useState} from "react";


const TypingArea = (props) => {
    const paragraph = [
        ['I', ' ', 'a', 'm', ' ', 'B', 'a', 't', 'm', 'a', 'n'],
        ['Y', 'o', 'u', ' ', 'a', 'r', 'e', '?'],
    ]
    return (
        <section className="h-96 flex flex-col">
            <div className='flex flex-col justify-self-start mt-20 mb-20'>
                {paragraph.map((sentence, index) => <Sentence key={index} sentence={sentence} typed={props.typed}/>)}
            </div>
        </section>
    )
 }

 export default TypingArea;