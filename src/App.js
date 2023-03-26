import { React, useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] =useState([])
  const [appointments, setAppointments] =useState([])
  /*
  Define state variables for 
  contacts and appointments 
  */

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };
  
 const addContacts = (name, phone, email) => {
  setContacts([
    ...contacts, {
      name: name, 
      phone: phone,
      email:email,
    },
  ])
 }

 const addAppointments = (title, contact, date, time) => {
  setAppointments([
    ...appointments, {
      title: title,
      contact: contact,
      date: date,
      time: time,
    }
  ])

 }
  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage 
            contacts={contacts}
            addContacts={addContacts}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage 
            appointments={appointments}
            addAppointments={addAppointments}
            contacts={contacts}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
