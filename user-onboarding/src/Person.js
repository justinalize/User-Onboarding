import React from 'react'

function Friend({ details }) {
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }
  console.log(details)
  return (
    <div className='friend container'>
      <h2>{details.username}</h2>
      <p>Name: {details.name}</p>
      <p>Email: {details.email}</p>
     

      {
        !!details.terms && !!details.terms.length &&
        <div>
         Terms of Service
          <ul>
            {details.terms.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default Friend
