import React, { Component } from 'react';
import axios from 'axios';

export const BreakerContext = React.createContext();
export const BreakerConsumer = BreakerContext.Consumer;

class BreakerProvider extends Component {
  state = { breakers: [] }

  componentDidMount(id) {
    axios.get(`/api/subjects/${id}/breakers/`)
      .then( res => {
        this.setState({ breakers: res.data })
      })
      .catch( err => {
         console.log(err)
      })
  }

  addBreaker = ( id, newBreaker ) => {
    const breaker = newBreaker
    axios.post(`/api/subjects/${id}/breakers`, { breaker } )
      .then( res => {
        const { breakers } = this.state
        this.setState({ breakers: [ ...breakers, res.data ] })
      })
      .catch( err => {
        console.log(err)
     })
  }

  updateBreaker = (id, breaker) => {
    axios.put(`/api/subjects/${id}/breakers/${id}`, { breaker })
      .then( res => {
        const breakers = this.state.breakers.map( b => {
          if (b.id === id)
            return res.data
          return b
        })
        this.setState({ breakers })
      })
      .catch( err => {
        console.log(err)
      })
  }

  deleteBreaker = (id) => {
    axios.delete(`/api/subjects/${id}/breakers/${id}`)
      .then( res => {
        const { breakers } = this.state
        this.setState({ breakers: breakers.filter( b => b.id !== id ) })
      })
      .catch( err => {
        console.log(err)
      })
  }

render() {
    return (
      <BreakerContext.Provider value={{
        breakers: this.state.breakers,
        ...this.state,
        addBreaker: this.addBreaker,
        updateBreaker: this.updateBreaker,
        deleteBreaker: this.deleteBreaker
      }}>
        { this.props.children }  
      </BreakerContext.Provider>
    )
  }
}

export default BreakerProvider;