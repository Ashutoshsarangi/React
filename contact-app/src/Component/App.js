import './App.css';

import React, {useState, Suspense, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Header = React.lazy(()=> import('./Header'));
const AddContact = React.lazy(()=>import('./AddContact'));
const ContactList = React.lazy(()=> import('./ContactList'));
const ContactDetail = React.lazy(()=> import('./ContactDetail'));


function App() {
  const LOCAL_STORAGE_KEY = 'contact_list'
  const [contactList, setContactList] = useState([]);

  const addContactHandler = (contact) =>{
    // console.log(contact);
    setContactList([...contactList, {id: uuidv4(), ...contact}]);
  }

  const removeContactHandler = (id)=>{
    const newContact = contactList.filter((contact)=>{
      return contact.id !== id;
    });
    setContactList(newContact);
  }
  useEffect(()=>{
    const val = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(val){
      setContactList(val);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactList));
  },[contactList]);

  return (
    <div className="ui container">
      <Suspense fallback={<div>Loading .... </div>}>
        <Router>
          <Header/>
          <Switch>
            <Route path='/' exact render={(props)=>(
              <ContactList {...props} contactList= {contactList} removeContactHandler={removeContactHandler}/>
            )}/>
            <Route path='/add' render={(props)=>(
              <AddContact {...props} addContactHandler={addContactHandler}/>
            )}/>
            <Route path='/contact/:id' render={(props)=>(
              <ContactDetail {...props} />
            )}/>
          </Switch>
          {/* <AddContact addContactHandler={addContactHandler}/> */}
          {/* <ContactList contactList= {contactList} removeContactHandler={removeContactHandler}/> */}
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
