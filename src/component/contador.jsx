import React, { useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Contador</h1>
            <p>You have clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )


}

export default Counter;