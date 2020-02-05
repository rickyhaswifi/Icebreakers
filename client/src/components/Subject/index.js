import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import ConnectedSubjectList from './SubjectList';
import { SubjectContext } from '../../providers/SubjectProvider';

const Subject = () => {
const value = useContext(SubjectContext);

return(
    <>
    <section>
    <ul>
      {value.subjects.map((subject,index) => 
        <ConnectedSubjectList 
        key={subject.index}
        {...subject}
        updateSubject={value.updateSubject}
        deleteSubject={value.deleteSubject}
        />
      )}
    </ul>  
    </section>

    {/* <Link to='/form'>Add Subject</Link> */}
    </>
  )
}

export default Subject