import React, { useState } from 'react';
import ContactList from './components/ContactList';
import EditContact from './components/EditContact'; // Исправлен путь к компоненту EditContact
import Contact from './components/Contact';

function App() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState(null);
  const [editing, setEditing] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const addContact = () => {
    if (name && phone) {
      const newContact = {
        name,
        phone,
        photo,
      };
      setContacts([...contacts, newContact]);
      setName('');
      setPhone('');
      setPhoto(null);
    } else {
      alert('Name and Phone Number are required.');
    }
  };

  const addContact2 = (contact) => {
    setContacts([...contacts, contact]);
    setEditing(false); // Установите editing в false, чтобы выйти из режима редактирования
  };

  const updateContact = (index, contact) => {
    const updatedContacts = [...contacts];
    updatedContacts[index] = { ...contacts[index], ...contact };
    setContacts(updatedContacts);
    setEditing(false);
    setSelectedContact(null);
  };

  const deleteContact = (index) => {
    const updatedContacts = [...contacts];
    updatedContacts.splice(index, 1);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h1>Contact book</h1>
      <div>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
        <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone' />
        <input type='file' onChange={(e) => setPhoto(e.target.files[0])} accept='image/*' />
        {editing ? (
          <EditContact contact={selectedContact} onSave={(contact) => updateContact(contacts.indexOf(selectedContact), contact)} onCancel={() => setEditing(false)} />
        ) : (
          <>
            <button onClick={() => setEditing(true)}>Add Contact</button>
            <ContactList contacts={contacts} onEdit={(index) => setSelectedContact(contacts[index])} onDelete={deleteContact} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
