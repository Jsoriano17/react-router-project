import React from 'react';
import NewForm from './NewForm';
import ShowVirus from './ShowVirus';

const Virus = (props) => {
  const { virus, addVirus, deleteVirus } = props
  return (
    <>
      <NewForm addVirus={addVirus} />
      {virus.map(e => (
        <div key={`virus-${e.id}`}>
          {e.name}
          {e.about}
          <div onClick={() => { deleteVirus(e.id) }}>Delete</div>
        </div>


      ))}
    </>
  )
}


export default Virus