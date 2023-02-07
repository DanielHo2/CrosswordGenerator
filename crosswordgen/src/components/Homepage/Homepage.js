import React, { Component } from 'react'
import Navigation from '../Navigation/Navigation'
import './Homepage.css'

export class Homepage extends Component {
  render() {
    return (
      <div className='Homepage'>
        <Navigation/>
        <h1>Crossword Generator</h1>
        <input className = 'input' placeholder = 'Enter Key Words'>
        </input>
        <div>
            <br></br>
            <button className='generate'>
                Generate!
            </button>
        </div>
        <br></br>
        <br></br>
        {/* <Navigation/> */}
      </div>
    )
  }
}

export default Homepage