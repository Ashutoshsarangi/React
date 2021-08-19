import './App.css';

import React, {useState, Suspense, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

const Header = React.lazy(()=> import('./Header'));
const AddContact = React.lazy(()=>import('./AddContact'));
const ContactList = React.lazy(()=> import('./ContactList'));


function App() {
  const LOCAL_STORAGE_KEY = 'contact_list'
  const [contactList, setContactList] = useState([]);

  const addContactHandler = (contact) =>{
    // console.log(contact);
    setContactList([...contactList, {id: uuidv4(), ...contact}]);
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
        <Header/>
        <AddContact addContactHandler={addContactHandler}/>
        <ContactList contactList= {contactList}/>
      </Suspense>
    </div>
  );
}

export default App;
