import React from 'react';
import NewForm from './NewForm';
import ShowVirus from './ShowVirus';
import EditForm from './EditForm';

const Virus = (props) => {
  const { virus, addVirus, deleteVirus, editVirus, addEditVirus} = props
  return (
    <>
      <h1>Create New Virus</h1>
      <NewForm addVirus={addVirus} />
      <h1>Edit and Delete Virus</h1>
      {virus.map(e => (
        <div key={`virus-${e.id}`}>
          {e.name}
          {e.about}
          <div onClick={() => { deleteVirus(e.id) }}>Delete</div>
          <div onClick={() => { editVirus(e.id) }}>Edit</div>
          {e.edit ? <EditForm edit={addEditVirus} id={e} /> : null}
        </div>


      ))}
    </>
  )
}


export default Virus