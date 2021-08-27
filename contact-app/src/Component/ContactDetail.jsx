


function ContactDetail(props){

    const {name, email} = props.location.state.specificContact;
    return(
        <div>
            <h1>This is a contact Detail page</h1>
            <span>Name: {name}</span>
            <span>Email: {email}</span>
        </div>
    );
}

export default ContactDetail;