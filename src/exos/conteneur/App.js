/**
 * Créer un application avec un conteur.
 *
 * L'application affiche un counteur (0 au départ),
 * 3 boutons (un bouton plus, un bouton moins, un bouton
 * réinitialiser)
 * Ainsi qu'un input type="number" avec la valeur 1
 *
 * -> Lors du clique sur plus, augmenter le compteur de
 *    la valeur contenu dans l'input number
 * -> Lors du clique sur moins, diminuer le compteur de de
 *    la valeur contenu dans l'input number
 * -> Lors du clique sur réinitialiser, remettre le conteur à 0
 *
 * !ATTENTION! Le conteur ne doit pas descendre en dessous de 0 !
 */
import React, { useState } from 'react'

export default function App() {
  const [counter, setCounter] = useState(0)
  const [raison, setRaison] = useState(1)
  const onPlus = () => {
    setCounter(counter + raison)
  }

  const onMoins = () => {
    if (counter > 0) setCounter(counter - raison)
  }

  const onReset = () => {
    setCounter(0)
  }

  const onRaison = ev => {
    if (parseInt(ev.target.value) === NaN) {
      return setRaison(1)
    }

    if (parseInt(ev.target.value) <= 0) {
      return setRaison(1)
    }

    setRaison(parseInt(ev.target.value))
  }

  return (
    <>
      <div>
        <input type="number" onChange={onRaison} value={raison}></input>
        <br />
        <button onClick={onPlus}>+</button>
        <p>Compteur : {counter}</p>
        <button onClick={onMoins}>-</button>
        <br />
        <button onClick={onReset}>Reset</button>
      </div>
    </>
  )
}
