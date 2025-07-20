import {useEffect, useState} from "react";
import Character from "./Components/Character.jsx";
import TextArea from "./Components/TextArea.jsx";

function App() {
    const [input, setInput] = useState([]);
    const [inputKey, setInputKey] = useState([]);

    const logChange = (event) => {
        const value = event.target.value.replace(/\n/g, '');
        setInput(value);
    }
    const logKey = (event) => {
        setInputKey((prevState) => {
            return [...prevState, event.key];
        });
    }
    return(
      <div className="flex flex-col justify-center items-center h-screen">
          <Character />
          <TextArea />
      </div>
    )
}

export default App
