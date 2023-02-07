import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css'

export class Navigation extends Component {
  render() {
    return (
      <div className='Navigation'>
        <nav className='nav'>
          <ul>  
            <li><Link to="/"><button>Home</button></Link></li>
            <li><Link to="/daily"><button>Daily Puzzle</button></Link></li>
            <li><Link to="/login"><button>Login</button></Link></li>
            <li><Link to="/sign-up"><button>Sign Up</button></Link></li>
            <li><Link to="/forgot-password"><button>Forgot Password</button></Link></li>
            <li><Link to="/about"><button>About</button></Link></li>
            <li><Link to="/share"><button>Share</button></Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navigation