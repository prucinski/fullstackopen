import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'




function App() {

const [countries, setCountries] = useState([])
const [filter, setFilter] = useState('')

const hook = () => {
  console.log('requesting data')
  axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => {
      console.log('Data provided')
      setCountries(response.data)
    })
}

const handleFilterChange = (event) => setFilter(event.target.value)

const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))

useEffect(hook, [])

  return (
  <div>
    <h1>Countries of the world</h1>
    <Filter filter={filter} handleFilterChange={handleFilterChange}/>
    <Countries countriesToShow={countriesToShow}/>
  </div>
    )

}

export default App;
