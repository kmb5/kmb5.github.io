import { useState, useEffect } from 'react'
import './App.css'
import './Typewriter.css'

function App() {
  const [count, setCount] = useState(0)

  const name = "Máté Bendegúz Kovács."

  return (
    <div className="App">
      <div>
        <h2>Hey there! I am</h2>
        <h1><Typewriter text={name} /></h1>
      </div>
      <h3></h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          👍 {count}
        </button>
      </div>
    </div >
  )
}

type TypewriterProps = {
  text: string;
}

function Typewriter(props: TypewriterProps) {


  let first_text = props.text

  const [text, setText] = useState("");
  const textState = ["istyping", "isdeleting"];
  const [typing, setTyping] = useState(textState[0]);

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(first_text.slice(0, text.length + 1));
    }, 100);
    return () => clearTimeout(timeout);
  }, [text]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing === "istyping" && text !== first_text) {
        setText(first_text.slice(0, text.length + 1));
      }
      else if (text === first_text && typing === "istyping") {
        sleep(2000).then(() => {
          setTyping(textState[1])
        })
      }
      else if ((text === first_text && typing === "isdeleting") || typing === "isdeleting") {
        setText(first_text.slice(0, text.length - 1));
        if (text.length <= 2) {
          setTyping(textState[0])
        }
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [text, typing]);

  return (
    <div>
      <div>
        {/* type writer display */}
        <span>
          <div className="blinking-cursor">{text}</div>
        </span>
      </div>
    </div>
  );
}


function getRandomOption(arr: Array<string>) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default App
