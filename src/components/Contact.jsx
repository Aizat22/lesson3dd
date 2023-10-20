import React from 'react'

const Contact = ({contact}) => {
  return (
    <div className='contact'>
        <h2>{contact.name}</h2>
        <p>Phone: {contact.phone}</p>
         <img src= {contact.photo}/>
    </div>
  )
}

export default Contact