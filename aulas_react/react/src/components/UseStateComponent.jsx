import React, { useState } from 'react'

function UseStateComponent() {
    const [value1, setValue1] =  useState(0)
    const [value2, setValue2] =  useState(0)

    const increaseValue1 = () => setValue1(value1 + 1)
    const increaseValue2 = () => setValue2(value2 + 1)

    const decreaseValue1 = () => setValue1(value1 - 1)
    const decreaseValue2 = () => setValue2(value2 - 1)
    
    return (
        <div>
            <p>{value1}</p>
            <button onClick={increaseValue1}>+</button>
            <button onClick={decreaseValue1}>-</button>
            <hr />
            <p>{value2}</p>
            <button onClick={increaseValue2}>+</button>
            <button onClick={decreaseValue2}>-</button>
            <hr />

            <p>Resultado: {value1} * {value2} = { value1 * value2 }</p>
        </div>
    )
}

export default UseStateComponent
