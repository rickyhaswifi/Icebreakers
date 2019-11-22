import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component {
  render() {
    return(
      <>
        <Link to='/'>Home</Link>
        <hr />
      </>
    )
  }
}

export default Nav