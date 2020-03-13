import React from 'react'


const About = (props) => {
  return (
    <div>
      {props.virus.map(e => (
        <div key={`virus-${e.id}`}>
          <h1>{e.name}</h1>
          <h1>{e.about}</h1>
        </div>
      ))}
    </div>
  )
}

export default About