import React, { useState } from 'react'

export default function AppEvent() {
  const [counter, setCounter] = useState(0)

  const onPlus = () => {
    console.log('Plus est appuyé')
    setCounter(counter + 1)
  }

  const onMinus = () => {
    console.log('Moins est appuyé')
    if (counter > 0) setCounter(counter - 1)
  }

  return (
    <div>
      <button onClick={onMinus}>-</button>
      <p>Compteur : {counter}</p>
      <button onClick={onPlus}>+</button>
    </div>
  )
}
