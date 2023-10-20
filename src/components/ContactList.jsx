import React from 'react';
import Contact from './Contact';

const ContactList = ({ contacts, onDelete, onEdit }) => {
  return (
    <div>
      {contacts.map((contact, index) => (
        <Contact
          key={index}
          contact={contact}
          onEdit={() => onEdit(index)} 
          onDelete={() => onDelete(index)} 
        />
      ))}
    </div>
  );
};

export default ContactList;
