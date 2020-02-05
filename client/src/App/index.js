import React, {Component} from 'react';
import {Container} from 'semantic-ui-react';
import {Switch, Route, useParams } from 'react-router-dom';
import Home from '../components/Home';
import ConnectedSubjectForm from '../components/Subject/SubjectForm';
import BreakersIndex from '../components/Breaker';
import ConnectedBreakerForm from '../components/Breaker/BreakerForm';
import ConnectedSubjectView from '../components/Subject/SubjectView';
import Nav from '../components/Shared/Nav';


function Subject() {

  let { id, name } = useParams();

  return (
    <>
    <ConnectedSubjectView 
    id={id}
    name={name}
    />
    </>
  );
}

class App extends Component {
  render(){
    return(
  <>
  <Nav />
  <Container>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/form" component={ConnectedSubjectForm} />
    <Route exact path="/:name/" component={ConnectedSubjectView} children={<Subject/>} />
    <Route exact path="/:name/:breaker/" component={BreakersIndex} />
    <Route exact path="/:name/:breaker/form" component={ConnectedBreakerForm} />
    </Switch>
  </Container>
  </>

    );
  }
}




export default App;