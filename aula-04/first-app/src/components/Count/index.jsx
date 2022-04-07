import React, { useState, useEffect } from "react"

export const Count = () => {

    //  useState é usado para atualizar o DOM
    const [count, setCount] = useState(0);

    //  useEffect executa uma função quando uma ou mais variáveis forem alteradas
    useEffect(() => {
        console.log(count)
    }, [count]);

    return <>
        <h1>Contador: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Clique</button>
    </>
}
