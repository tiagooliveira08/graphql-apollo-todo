import React, { useState } from "react";

const Hook = () => {
    const [count, inversedCount, setCount] = useState(0,0);

    return (
        <div>
            <p>You clicked {count} {inversedCount} times</p>
            <button onClick={() => { setCount(count + 1)}}>Clique aqui</button>
        </div>
    )
}

export default Hook;