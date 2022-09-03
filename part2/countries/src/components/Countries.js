import React from 'react'

const Country = ({country}) => {
  console.log(country)
  return(
    <div>
      <h2>{(country.name.common + ' (' + country.name.official + ')')}</h2>
      <>capital {country.capital}<br></br></>
      <>area {country.area}</>
      <h3>languages:</h3>
      <ul>
        {Object.keys(country.languages).map(key =>
          <li key={key}>{country.languages[key]}</li>)}
      </ul>
      <img src={country.flags.png} alttext={(country.name.common + ' flag')}></img>

    </div>

  )

}

const Countries = ({countriesToShow}) => {

  if(countriesToShow.length > 10){
    return(
      <>Too many matches, specify another filter</>
    )
  }
  else if (countriesToShow.length === 1){
    return(
      <Country country={countriesToShow[0]}/>
    )
  }
  else{
    return(
      <ul>
      {countriesToShow.map(country =>
        <li key={country.name.common}>{country.name.common}</li>
      )}
    </ul>
    )
  }



  }

  export default Countries