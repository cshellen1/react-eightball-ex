import React, {useState} from "react";
import "./EightBall.css";

const choice = (arr) => {
  const randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
}

function EightBall (props) {
  const [msg, setMsg] = useState("Think of a Question.");
  const [color, setColor] = useState("black");

  const reSet = () => {
    setMsg("Think of a Question.");
    setColor("black");
  };

  const handleClick = () => {
    if (color == "black"){
      const { msg, color } = choice(props.answers);
      setColor(color);
      setMsg(msg);
    }
  };
  return (
    <>
      <div id="eightball" style={{ background: color }} onClick={handleClick}>
      {msg}
      </div>
      <button onClick={ reSet }>Reset</button>
    </>
  );
}

EightBall.defaultProps = {
  answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" }
  ]
};
console.log(EightBall)


export default EightBall;
