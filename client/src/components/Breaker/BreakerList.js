import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ConnectedBreakerForm from './BreakerForm';
import {BreakerContext, BreakerConsumer} from '../../providers/BreakersProvider';
import {SubjectConsumer} from '../../providers/SubjectProvider';

class BreakersIndex extends Component {
  render() {
    const {id, name, image, deleteSubject} = this.props
    return (
      <>
      <Link to='/'>Back</Link>
      <h1>Ice Breakers</h1>
       {/* {subject.breakers.name} */}
       <Link to={`/subject/${id}/breaker/form`}>Add Breaker</Link>
      </>
    );
  }
}

const ConnectedBreakersList = (props) => {
  return (
    <SubjectConsumer>
       { value => (
      <BreakersIndex 
      { ...props }
      { ...value }
      />
       )}
    </SubjectConsumer>
  )
}

export default ConnectedBreakersList;