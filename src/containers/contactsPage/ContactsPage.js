import { React, useState, useEffect} from "react";
import ContactForm from './ContactForm/ContactForm';
import TileList from './TileList/TileList';

export const ContactsPage = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  /*
  Define state variables for 
  contact info and duplicate check
  */


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!diplicate){
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  useEffect(() => {
    const nameIsDuplicate = () => {
      const found = contacts.find((contact) => contact.name === name);
      if (found !== undefined) {
        return true;
      }
      return false;
    };

    if (nameIsDuplicate()) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [name, contacts, duplicate]);
  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
     <section>
        <h2>
          Add Contact
          {duplicate ? " - Name Already Exists" : ""}
        </h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
