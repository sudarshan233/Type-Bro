import '../index.css';
import { useEffect, useState } from "react";;

const Character = (props) => {
    let charStyle = "border-black text-3xl whitespace-pre";
    const [divColor, setDivColor] = useState({
        backgroundColor: "none",
    });
    const { character, globalIndex, typed } = props;
    useEffect(() => {
        if (typed && typed.length > globalIndex) {
            if (typed[globalIndex] === character) {
                setDivColor({ backgroundColor: "green" });
            } else {
                setDivColor({ backgroundColor: "red" });
            }
        } else {
            setDivColor({ backgroundColor: "none" });
        }
    }, [typed, globalIndex, character]);
    return(
        <span className={charStyle} style={divColor}>{props.character}</span>
    )
}

export default Character