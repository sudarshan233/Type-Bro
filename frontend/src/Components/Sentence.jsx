import Character from "./Character.jsx";
import '../index.css';
import {useEffect, useState} from "react";

const Sentence = (props) => {
    const { sentence } = props;

    return (
        <div className="flex">
            {sentence.map((character, index) => {
                return <Character key={index} character={character} typed={props.typed} text={sentence}/>
            })}
        </div>
    )
}

export default Sentence;