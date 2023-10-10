import React from 'react';
import { ContactPicker } from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString('it-IT')
      .split('/');
    return `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${year}`;
  };

  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>

      <label>
        Date:
        <input
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>

      <label>
        Time:
        <input
          type='time'
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </label>
      <label>
        {' '}
        With:
        <ContactPicker
          name='contact'
          value={contact.name}
          contacts={getContactNames()}
          onChange={(e) => setContact(e.target.value)}
          placeholder='Pick a contact'
        />
      </label>
      <input type='submit' value='S U B M I T' />
    </form>
  );
};
