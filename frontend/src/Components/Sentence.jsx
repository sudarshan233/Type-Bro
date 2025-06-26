import Character from "./Character.jsx";
import '../index.css';

const Sentence = (props) => {
    const { sentence, startIndex, sentenceId, paragraph, input } = props;
    try {

        return (
            <div className="flex">
                {sentence.map((character, index) => {
                    return <Character
                        key={index}
                        id={index}
                        character={character}
                        globalIndex={startIndex + index}
                        sentenceId={sentenceId}
                        para={paragraph}
                        typed={input}/>
                })}
            </div>
        )
    } catch (error) {
        console.error(error);
    }
}

export default Sentence;