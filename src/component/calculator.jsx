import React, { useState} from "react";


const Calculator = () => {
    const [input, setInput] = useState("");
    const [operation, setOperation] = useState("");
    const [firstNumber, setFirstNumber] = useState("");
  
    const handleDigitClick = (digit) => {
      setInput(prevInput => prevInput + digit);
    };
  
    const handleOperationClick = (op) => {
        if (input !== "") {
          setOperation(op);
          setFirstNumber(input + op); // Concatenamos el operador al número actual en el input
          setInput(""); // Limpiamos el input para empezar a escribir el siguiente número
        }
      };
  
    const calculateResult = () => {
      if (firstNumber && input && operation) {
        const num1 = parseFloat(firstNumber); // Convertir a número decimal
        const num2 = parseFloat(input); // Convertir a número decimal
        let newResult;
  
        switch (operation) {
          case "+":
            newResult = num1 + num2;
            break;
          case "-":
            newResult = num1 - num2;
            break;
          case "*":
            newResult = num1 * num2;
            break;
          case "/":
            newResult = num1 / num2;
            break;
          case "%":
            newResult = num1 % num2;
            break;
          default:
            newResult = 0;
        }
  
        setInput(newResult.toString());
        setOperation("");
        setFirstNumber("");
      }
    };
  
    const changeSign = () => {
      if (input === "") return;
  
      setInput(prevInput => (-parseFloat(prevInput)).toString());
    };
  
    return (
      <>
        <h1>Calculadora</h1>
  
        <div className="calculator">
          <input type="text" id="resultado" value={input} disabled />
          <div className="buttons">
            <button onClick={() => setInput("")}>C</button>
            <button onClick={changeSign}>+/-</button>
            <button onClick={() => handleOperationClick("%")}>%</button>
            <button onClick={() => handleOperationClick("/")}>/</button>
  
            <button onClick={() => handleDigitClick("7")}>7</button>
            <button onClick={() => handleDigitClick("8")}>8</button>
            <button onClick={() => handleDigitClick("9")}>9</button>
            <button onClick={() => handleOperationClick("*")}>X</button>
  
            <button onClick={() => handleDigitClick("4")}>4</button>
            <button onClick={() => handleDigitClick("5")}>5</button>
            <button onClick={() => handleDigitClick("6")}>6</button>
            <button onClick={() => handleOperationClick("-")}>-</button>
  
            <button onClick={() => handleDigitClick("1")}>1</button>
            <button onClick={() => handleDigitClick("2")}>2</button>
            <button onClick={() => handleDigitClick("3")}>3</button>
            <button onClick={() => handleOperationClick("+")}>+</button>
  
            <button onClick={() => handleDigitClick("0")}>0</button>
            <button onClick={() => handleDigitClick(".")}>.</button>
            <button className="red-button" onClick={calculateResult}>=</button>
          </div>
        </div>
      </>
    );
  };
  
  export default Calculator;