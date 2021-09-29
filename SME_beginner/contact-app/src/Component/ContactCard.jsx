import {Link} from 'react-router-dom';
import user from '../Images/avatar.png';

const ContactCard = (props)=>{
    const contact = props.contact;
    const deleteHandler = (id)=>{
        props.removeContactHandler(id);
    }

    return (
        <div className="item">
            <img className="ui avatar image" src={user}/>
            <div className="content">
                <Link to={{pathname:`/contact/${contact.id}`, state:{specificContact: props.contact}}}>    
                    <div className="header">
                        {contact.name}
                    </div>
                    <div>
                        {contact.email}
                    </div>
                </Link>
            </div>
            <i className="trash alternate outline icon" onClick={()=> deleteHandler(contact.id)}></i>
            <Link to={{pathname:'/edit', state:{specificContact: props.contact}}}>
                <div>
                    <i className="edit alternate outline icon"  ></i>
                </div>
            </Link>
        </div>
    );
}

export default ContactCard;