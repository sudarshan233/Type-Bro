import '../index.css';

const Character = (props) => {
    let charStyle = "border-black text-3xl whitespace-pre";
    const typed = props.typed;
    const sentence = props.text;
    sentence.map((character, index) => {
        charStyle += typed[index] === character ? " bg-green-500" : "bg-red-500";
    })
    return(
        <span className={charStyle}>{props.character}</span>
    )
}

export default Character