import React, { useState} from "react";


const Calculator = () => {
    const [input, setInput] = useState("");
    const [operation, setOperation] = useState("");
    const [firstNumber, setFirstNumber] = useState("");
  
    // función para manejar los clicks en los botones de los dígitos y mostrarlos en el input
    const handleDigitClick = (digit) => {
      setInput(prevInput => prevInput + digit); // forma funcional de useState, prevInput es el estado anterior de input
    };
    
    // función para manejar los clicks en los botones de operaciones
    const handleOperationClick = (op) => {
      if (input !== "") {
        setOperation(op); // se actualiza operation estableciendo la operación seleccionada en la calculadora
        setFirstNumber(input); // input representa el numero ingresado antes de pulsar en operacion
        setInput(""); // Limpiamos el input para empezar a escribir el siguiente número
      }
    };
      
    // usaremos esta función al pulsar el botón "="
    const calculateResult = () => {
      if (firstNumber && input && operation) { // verificamos si firstNumber, input y operation tienen valores asignados, es decir, solo se ejecuta la función si existen estos 3 valores
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
  
        setInput(newResult.toString()); // actualiza input al valor de newResult convirtiendolo previamente en cadena de texto ya que el state input es una cadena de texto.
        setOperation(""); //se resetea el valor de operation
        setFirstNumber(""); // se resetea el valor de firsNumber
      }
    };
    // esta función cambia el signo del número actualmente en input cuando se activa, y lo muestra en la calculadora. Sin embargo, si no hay ningún número en input, la función no realiza ningún cambio
    const changeSign = () => {
      if (input === "") return; //si input está vacío la función no hace nada, sale directamente.
  
      setInput(prevInput => (-parseFloat(prevInput)).toString()); // convierte el número actual del input en flotante para cambiarle el signo y luego lo convierte en cadena para que sea legible para input
    };
  
    return (
      <>
        <h1>React Calculator</h1>
        
        <div className="calculator">
          <input type="text" id="resultado" value={firstNumber + operation + input} disabled />
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