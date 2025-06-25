import Sentence from "./Sentence.jsx";

const TypingArea = () => {
    const paragraph = [
        ['I', ' ', 'a', 'm', ' ', 'B', 'a', 't', 'm', 'a', 'n'],
        ['Y', 'o', 'u']
    ]
    function logKey(event) {
        console.log(event)
    }
    return (
        <div className='flex flex-col' onKeyDown={logKey}>
            {paragraph.map((sentence, index) => <Sentence key={index} sentence={sentence}/>)}
        </div>
    )
 }

 export default TypingArea;