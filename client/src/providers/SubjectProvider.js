import React, { Component } from 'react';
import axios from 'axios';

export const SubjectContext = React.createContext();
export const SubjectConsumer = SubjectContext.Consumer;

class SubjectProvider extends Component {
  state = { subjects: [] }

  componentDidMount() {
    axios.get(`/api/subjects`)
      .then( res => {
        this.setState({ subjects: res.data })
      })
      .catch( err => {
         console.log(err)
      })
  }

  addSubject = (subject) => {
    axios.post(`/api/subjects`, { subject } )
      .then( res => {
        const { subjects } = this.state
        this.setState({ subjects: [ ...subjects, res.data ] })
      })
      .catch( err => {
        console.log(err)
     })
  }

  updateSubject = (id, subject) => {
    axios.put(`/api/subjects/${id}`, { subject })
      .then( res => {
        const subjects = this.state.subjects.map( s => {
          if (s.id === id)
            return res.data
          return s
        })
        this.setState({ subjects })
      })
      .catch( err => {
        console.log(err)
      })
  }

  deleteSubject = (id) => {
    axios.delete(`/api/subjects/${id}`)
      .then( res => {
        const { subjects } = this.state
        this.setState({ subjects: subjects.filter( s => s.id !== id ) })
      })
      .catch( err => {
        console.log(err)
      })
  }

render() {
    return (
      <SubjectContext.Provider value={{
        subjects: this.state.subjects,
        ...this.state,
        addSubject: this.addSubject,
        updateSubject: this.updateSubject,
        deleteSubject: this.deleteSubject
      }}>
        { this.props.children }  
      </SubjectContext.Provider>
    )
  }
}

export default SubjectProvider;