import React, { Component } from 'react';
import {SubjectConsumer} from '../../providers/SubjectProvider';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';

class BreakerHeader extends Component {
  render () {
  const {id, name, image, deleteSubject} = this.props

return (
    <>
        <h1>{name}</h1>
        <br />
    </>
  ) 
 }
}

const ConnectedBreakerHeader = (props) => {
  return (
    <SubjectConsumer>
       { value => (
      <BreakerHeader 
      { ...props }
      { ...value }
      />
       )}
    </SubjectConsumer>
  )
}

export default ConnectedBreakerHeader;