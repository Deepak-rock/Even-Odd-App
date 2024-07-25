// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncerment = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => {
      console.log(`Prevstate: ${prevState.count}`)
      return {count: prevState.count + randomNumber}
    })
  }

  render() {
    const {count} = this.state
    const OddOrEvenDisplay = count % 2 === 0 ? 'Even' : 'odd'
    return (
      <div className="bg-container">
        <div className="count-container">
          <h1 className="heading">Count {count}</h1>
          <p className="odd-or-even">Count is {OddOrEvenDisplay}</p>
          <button className="button" type="button" onClick={this.onIncerment}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
