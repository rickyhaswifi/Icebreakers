import React from 'react';
import {Container} from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Subject from '../Subject';
import ConnectedSubjectForm from '../Subject/SubjectForm';
import BreakersIndex from '../Breaker';
import ConnectedBreakerForm from '../Breaker/BreakerForm';

const App = () => (
  <>
  <Container>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/subject" component={Subject} />
    <Route exact path="/subject/form" component={ConnectedSubjectForm} />
    <Route exact path="/subject/:id/breakers/" component={BreakersIndex} />
    <Route exact path="/subject/:id/breaker/form" component={ConnectedBreakerForm} />
    </Switch>
  </Container>
  </>
);

export default App;