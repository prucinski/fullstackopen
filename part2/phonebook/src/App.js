import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const isEqualPerson = (person) => person.name === newName
    if(persons.findIndex(isEqualPerson) === -1){
      const personObject = {
        name: newName
      }
      setPersons(persons.concat(personObject))
      setNewName('')

    }

    else{
      alert(`${newName} is already added to the phonebook`)
    }

    }
    const handleNameChange = (event) => setNewName(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addPerson}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleNameChange}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <li key={person.name}>{person.name}</li>
        )}
      </ul>
      
    </div>
  )
}

export default App
