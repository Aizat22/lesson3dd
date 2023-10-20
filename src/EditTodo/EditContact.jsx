import React, { useState } from 'react';

const EditContact = ({ onSave, onCancel, initialContact }) => {
  const [name, setName] = useState(initialContact.name);
  const [phone, setPhone] = useState(initialContact.phone);


  const handleSave = () => {
    onSave({ name, phone });
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className='edit-contact'>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
      <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone' />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
      <EditContact initialContact={selectedContact} onSave={handleSave} onCancel={handleCancel} />
    </div>
  );
};

export default EditContact;
