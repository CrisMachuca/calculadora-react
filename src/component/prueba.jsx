import React, { useState} from "react";

const Prueba = () => {
    const [input, setInput] = useState("");
    const [operation, setOperation] = useState("");
    const [firstNumber, setFirstNumber] = useState("");

    const handleDigitClick = (digit) => {
        setInput(prevInput => prevInput + digit);
    }


    
    
    return (
        <div>
        <p>Calculadora 2</p>
            <div className="calculator">
            <input type="text" id="resultado" value={input} disabled />
                <div className="buttons">
                    <button >C</button>
                    <button >+/-</button>
                    <button >%</button>
                    <button >/</button>
        
                    <button >7</button>
                    <button >8</button>
                    <button >9</button>
                    <button >X</button>
        
                    <button >4</button>
                    <button >5</button>
                    <button >6</button>
                    <button >-</button>
        
                    <button >1</button>
                    <button >2</button>
                    <button >3</button>
                    <button >+</button>
        
                    <button >0</button>
                    <button >.</button>
                    <button >=</button>
                </div>
        </div>
        </div>
        );
    }

export default Prueba;


