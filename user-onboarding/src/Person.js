import React from 'react'

function Person({ details }) {
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }

  return (
    <div>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.password}</p>
      

      {
        !!details.tos && !!details.tos.length &&
        <div>
          Terms:
          <ul>
            {details.tos.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default Person
