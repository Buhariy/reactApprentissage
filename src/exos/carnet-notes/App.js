/**
 * Exercice : Carnet de note
 *
 * - Afficher un h1 avec comme titre "Carnet de note"
 * - Afficher un input type number pour rentrer une nouvelle note
 * - Afficher un bouton "Ajouter la note"
 * - Afficher dans une balise <ul> / <li> toutes les notes rentrées
 *
 * Bonus : Ajouter un bouton "supprimer" sur une note dans la balise <li>
 * Bonus : Ajouter la possibilité de modier une note en éditant un input
 *         dans la balise <li>
 *
 * Lorsque je rentre un chiffre dans l'input, que je clique sur ajouter
 * alors la note doit apparaitre dans la balise <ul> / <li>
 *
 * (Il vvous faudra utiliser la méthode "map" :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 * )
 *
 * Bonus : Faire en sorte de pouvoir supprimer une note en cliquant
 *         sur le bouton supprimer
 * Bonus : Pouvoir éditer un notes
 */
import React, { useState } from 'react'

export default function App() {
  const [newNote, setnewNote] = useState('')
  const [noteList, setNoteList] = useState([])
  const [newNoteEdit, setEditNote] = useState([])

  const changeNewNote = ev => {
    setnewNote(ev.target.value)
  }
  const changeNewEditNote = ev => {
    setEditNote(ev.target.value)
  }

  const addNoteList = () => {
    setNoteList([newNote, ...noteList])
    setnewNote('')
  }

  const updateNote = () => {
    setNoteList([newNote, ...noteList])
    setnewNote('')
  }

  const removeNote = index =>
    setNoteList(noteList.filter((note, i) => i !== index))

  return (
    <>
      <h1>Carnet de note</h1>
      <ul>
        {noteList.map((note, index) => (
          <li key={`note-${index}`}>
            {note}
            <button onClick={() => removeNote(index)}>Suppr</button>
          </li>
        ))}
      </ul>
      <div>
        <input type="number" value={newNote} onChange={changeNewNote}></input>
        <button onClick={addNoteList}>Ajouter la note</button>
      </div>
      <div>
        <input
          type="number"
          value={newNote}
          onChange={changeNewEditNote}
        ></input>
        <button onClick={updateNote}>Editer la note</button>
      </div>
    </>
  )
}
