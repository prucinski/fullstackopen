import { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>


const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>{text}</button>
  )
}
const StatisticLine = ({type, counter, extra}) => {
  return(
    <tr>
      <td>{type}</td>
      <td>{counter}{extra}</td>
    </tr>
  )
}


const Statistics= (props) => {
  let good = props.good
  let neutral = props.neutral
  let bad = props.bad
  let total = props.total
  if(total === 0){
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return(
    <table>
      <tbody>
        <StatisticLine type="good"counter={good}/>
        <StatisticLine type="neutral"counter={neutral}/>
        <StatisticLine type="bad"counter={bad}/>
        <StatisticLine type="all"counter={total}/>
        <StatisticLine type ="average"counter = {Math.round(100*(good-bad)/total)/100}/>  
        <StatisticLine type ="positive" counter = {Math.round(good/total * 10000)/100} extra="%"/>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGood = () => {setGood(good + 1); setTotal(total + 1)}
  const handleNeutral = () => {setNeutral(neutral + 1); setTotal(total + 1)}
  const handleBad = () => {setBad(bad + 1); setTotal(total + 1)}

  return (
    <div>
      <Header text="give feedback"/>
      <Button handleClick={handleGood} text="good"/>
      <Button handleClick={handleNeutral} text="neutral"/>
      <Button handleClick={handleBad} text="bad"/>
      <Header text="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />

    </div>
  )
}

export default App
