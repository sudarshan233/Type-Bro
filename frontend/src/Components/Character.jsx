import '../index.css';
import { useEffect, useState } from "react";;

const Character = (props) => {
    let charStyle = "border-black text-3xl whitespace-pre";
    const [divColor, setDivColor] = useState({
        backgroundColor: "none",
    });
    const typed = props.typed;
    const paragraph = props.para;
    const sentenceId = props.sentenceId;
    useEffect(() => {
        if (typed && typed[props.id]) {
            if (typed[props.id] === paragraph[sentenceId][props.id]) {
                setDivColor({ backgroundColor: "green" });
            } else {
                setDivColor({ backgroundColor: "red" });
            }
        } else {
            setDivColor({ backgroundColor: "none" });
        }
    }, [typed, props.id, paragraph]);
    return(
        <span className={charStyle} style={divColor}>{props.character}</span>
    )
}

export default Character