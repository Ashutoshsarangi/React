import './App.css';

import React, {useState, Suspense, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import api from '../Api/Contact';

const Header = React.lazy(()=> import('./Header'));
const AddContact = React.lazy(()=>import('./AddContact'));
const EditContact = React.lazy(()=> import('./EditContact'));
const ContactList = React.lazy(()=> import('./ContactList'));
const ContactDetail = React.lazy(()=> import('./ContactDetail'));


function App() {
  // const LOCAL_STORAGE_KEY = 'contact_list'
  const [contactList, setContactList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);


  const searchKeyword = (val)=>{
    setSearchTerm(val);
    if(searchTerm !== ''){
      const result = contactList.filter((contact)=>{
        return Object.values(contact)
          .join(' ')
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      });
      setSearchResult(result);
    } else{
      setSearchResult(contactList);
    }
  }

  const addContactHandler = async(contact) =>{
    // console.log(contact);
    const request = {
      id: uuidv4(), 
      ...contact
    }
    const res = await api.post('/contacts', request);
    console.log('res---> ', res.data);
    setContactList([...contactList, res.data]);
  }

  const updateContactHandler = async(contact) =>{
    const res = await api.put(`/contacts/${contact.id}`, contact);
    console.log(res.data);
    const {id, name, email} = res.data
    setContactList(contactList.map((contact)=>{
      if(contact.id === id){
        return res.data
      }else{
        return contact;
      }
    }))
  }

  // Retrieve Contact Information from API (JSON - Server)

  const retrieveContact = async ()=>{
    const res = await api.get('/contacts');
    console.log(res.data);
    return res.data;
  }

  const removeContactHandler = async (id)=>{
    await api.delete(`/contacts/${id}`);
    const newContact = contactList.filter((contact)=>{
      return contact.id !== id;
    });
    setContactList(newContact);
  }
  useEffect(async ()=>{
    // const val = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if(val){
    //   setContactList(val);
    // }
    const val = await retrieveContact();
    if(val){
      console.log(val);
      setContactList(val);
    }
  },[]);

  useEffect(()=>{
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactList));
  },[contactList]);

  return (
    <div className="ui container">
      <Suspense fallback={<div>Loading .... </div>}>
        <Router>
          <Header/>
          <Switch>
            <Route path='/' exact render={(props)=>(
              <ContactList 
              {...props} 
              contactList= {searchTerm.length < 1 ? contactList : searchResult} 
              removeContactHandler={removeContactHandler}
              term={searchTerm}
              searchKeyword={searchKeyword}
              />
            )}/>
            <Route path='/add' render={(props)=>(
              <AddContact {...props} addContactHandler={addContactHandler}/>
            )}/>
             <Route path='/edit' render={(props)=>(
              <EditContact {...props} updateContactHandler={updateContactHandler}/>
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
