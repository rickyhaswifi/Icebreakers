import React, { Component } from 'react';
import {SubjectConsumer} from '../../providers/SubjectProvider';
import {Link} from 'react-router-dom';
import {Button} from 'semantic-ui-react';

class SubjectList extends Component {
  render () {
  const {id, name, image, deleteSubject} = this.props
return (
    <>
      <li>
        <h1>{name}</h1>
        <img src={image} />
        <br />
        <Link to={{pathname: `/${name}/`}}>View Topics</Link>
        <br />
        <Button color='red' onClick = {() => deleteSubject(id)}>Delete</Button>
      </li>
    </>
  ) 
 }
}

const ConnectedSubjectList = (props) => {
  return (
    <SubjectConsumer>
       { value => (
      <SubjectList 
      key={props.id}
      { ...props }
      { ...value }
      />
       )}
    </SubjectConsumer>
  )
}

export default ConnectedSubjectList;