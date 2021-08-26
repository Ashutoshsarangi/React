import React, {Suspense} from 'react';
import {Link} from 'react-router-dom'
import ContactCard from './ContactCard';

function ContactList(props){

    const deleteHandler = (id)=>{
        props.removeContactHandler(id);
    }

    const RenderContactList = props.contactList.map((contact)=>{
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
            {RenderContactList}
        </div>
    );
}

export default ContactList;