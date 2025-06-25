import Character from "./Character.jsx";
import '../index.css';

const Sentence = (props) => {
    const { sentence } = props;
    return (
        <div className="flex gap-5">
            {sentence.map((character, index) => <Character key={index} character={character} />)}
        </div>
    )
}

export default Sentence;