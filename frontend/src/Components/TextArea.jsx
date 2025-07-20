import {useState, useEffect} from "react";
import {paraList} from "./Character.jsx";

function TextArea(){
    const [textValue, setTextValue] = useState([]);
    const [inputKey, setInputKey] = useState([]);
    const [remainingText, setRemainingText] = useState(0);

    useEffect(()=>{
        if(remainingText === 1) {
            const spans = document.querySelectorAll("span");
            if (textValue.length < spans.length) {
                spans[textValue.length].style.backgroundColor = "white";
            }
        }
        for(let i=0;i<textValue.length;i++){
            if(paraList[i] === textValue[i])document.querySelectorAll("span")[i].style.backgroundColor="green";
            else if(paraList[i] !== textValue[i])document.querySelectorAll("span")[i].style.backgroundColor="red";
        }
    },[textValue])

    const compare=(e)=>{
        const text = e.target.value;
        setTextValue((previousState) => {
            if(previousState.length > text.length) setRemainingText(1);
            return text.split("");
        })
    }
    return(<div><textarea onChange={compare}></textarea></div>)
}
export default TextArea;