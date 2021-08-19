
import user from '../Images/avatar.png';

const ContactCard = (props)=>{
    const contact = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={user}/>
            <div className="content">
                <div className="header">
                    {contact.name}
                </div>
                <div>
                    {contact.email}
                </div>
            </div>
            <i className="trash alternate outline icon"></i>
        </div>
    );
}

export default ContactCard;