import React from 'react'
import ShowVirus from './ShowVirus'

const Home = (props) =>{

  return(
    <div>
          {
          props.vir.map(virus => (
            <ShowVirus key={virus.id} {...virus} />
          ))
        }
    </div>
  )
}

export default Home