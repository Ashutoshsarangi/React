import React, {Suspense, useRef} from 'react';
import {Link} from 'react-router-dom'
import ContactCard from './ContactCard';

function ContactList(props){

    const inputEl = useRef('');

    const deleteHandler = (id)=>{
        props.removeContactHandler(id);
    }

    const getSearchTerm = ()=>{
        console.log(inputEl);
        props.searchKeyword(inputEl.current.value);

    }
    const RenderContactList = props.contactList.map((contact)=>{
        console.log('This called 1st');
        return(
            <Suspense fallback={<div>Loading ...</div>}  key={contact.id}>
                <ContactCard contact={contact} removeContactHandler={deleteHandler}/>
            </Suspense>
        );
    })

    return(
        <div className="ui celled list" style={{marginTop:'9%' }}>
            Contact List
            <Link to='/add'>
                <button className="ui button blue right">Add Contact</button>
            </Link>
            <div>
                <input 
                ref={inputEl}
                type="text" 
                placeholder="Search Bar" 
                value={props.term} onChange={getSearchTerm}/>
            </div>
            {RenderContactList.length > 0 ? RenderContactList: 'No Contact Found'}


        </div>
    );
}

export default ContactList;