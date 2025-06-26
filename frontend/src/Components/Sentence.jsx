import Character from "./Character.jsx";
import '../index.css';

const Sentence = (props) => {
    const { sentence } = props;
    try {

        return (
            <div className="flex">
                {sentence.map((character, index) => {
                    return <Character
                        key={index}
                        id={index}
                        character={character}
                        sentenceId={props.sentenceId}
                        para={props.paragraph}
                        typed={props.input}/>
                })}
            </div>
        )
    } catch (error) {
        console.error(error);
    }
}

export default Sentence;