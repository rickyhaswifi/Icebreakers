import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { BreakerContext } from '../../providers/BreakersProvider';
import { SubjectContext } from '../../providers/SubjectProvider';
import ConnectedBreakersList from './BreakerList';
import ConnectedBreakerHeader from './BreakerHeader';

const BreakersIndex = () => {
const value = useContext(BreakerContext)
return(
      <>
         {/* {value.subjects.map(subject => 
        <ConnectedBreakerHeader 
        key={subject.id}
        {...subject}
        /> 
        )} */}

         <ul>
          {value.breakers.map(breaker => 
           <ConnectedBreakersList 
           key={breaker.id}
           {...breaker}
           updateBreaker={value.updateBreaker}
           deleteBreaker={value.deleteBreaker}
           />
          )}
        </ul>   
      </>
  )
}

export default BreakersIndex