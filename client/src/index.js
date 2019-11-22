import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter} from 'react-router-dom';
import SubjectProvider from './providers/SubjectProvider';
import BreakerProvider from './providers/BreakersProvider';

ReactDOM.render(
  <SubjectProvider>
    <BreakerProvider>  
      <BrowserRouter>  
        <App />
      </BrowserRouter>
    </BreakerProvider>
  </SubjectProvider>
, document.getElementById('iceBreakers')
);
