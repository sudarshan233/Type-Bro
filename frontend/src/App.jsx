import TypingArea from "./Components/TypingArea.jsx";
import InputArea from "./Components/InputArea.jsx";
import {useEffect, useState} from "react";
function App() {
    const [input, setInput] = useState([]);
    const logChange = (event) => {
        const value = event.target.value.replace(/\n/g, '');
        setInput(value);
    }
    const logKey = (event) => {
        console.log(event.key);
    }
    return(
      <div className="flex flex-col justify-center items-center h-screen">
          <TypingArea typed={input}/>
          <InputArea handleChange={logChange} handleKey={logKey}/>
      </div>
    )
}

export default App
