import React, { Component, useContext } from 'react';
import {SubjectConsumer} from '../../providers/SubjectProvider';
import BreakersIndex from '../Breaker';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';

class SubjectView extends Component {
  render(){
    const { id, name, image, deleteSubject, subject} = this.props
    return(
      <>
      <h1>Subject View</h1>
      
        <h1>{name}</h1>
        <br />
        <BreakersIndex />
         <Link to='/:name/:breaker/form'>Add Ice Breaker</Link>
      </>
    )
  }
}


const ConnectedSubjectView = (props) => {
  return (
    <SubjectConsumer>
       { value => (
      <SubjectView 
      key={props.id}
      { ...props }
      { ...value }
      />
       )}
    </SubjectConsumer>
  )
}

export default ConnectedSubjectView;