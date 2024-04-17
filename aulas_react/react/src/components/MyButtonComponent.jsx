import React, { useState } from 'react'

function MyButtonComponent() {
    const [count, setCount] = useState(10)

    const addCount = () => { 
      setCount(count + 1)
    //   setCount(v => v + 1)
    }
    return (
        <div>
            <button onClick={addCount}>Clicou {count} vezes</button>
        </div>
    )
}

export default MyButtonComponent
