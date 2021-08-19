import React, {Suspense} from 'react';
import ContactCard from './ContactCard';

function ContactList(props){

    const RenderContactList = props.contactList.map((contact)=>{
        return(
            <Suspense fallback={<div>Loading ...</div>}  key={contact.id}>
                <ContactCard contact={contact} />
            </Suspense>
        );
    })

    return(
        <div className="ui celled list">
            Contact List
            {RenderContactList}
        </div>
    );
}

export default ContactList;