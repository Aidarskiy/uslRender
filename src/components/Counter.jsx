import React, { useState } from "react";
import "../index.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <div>
        <p>Вы нажали число {count} раз</p>
      </div>
      <div className="btns">
        <button style={{background: 'lightblue', border: '3px solid blue', height: '50px', width: '50px', fontSize: '30px', color: 'gray'}} onClick={() => setCount(count - 1)}>-</button>
        <button style={{background: 'purple', border: '3px solid yellow' , height: '50px', width: '50px', fontSize: '30px'}} onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default Counter;