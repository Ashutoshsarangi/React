import React from 'react';


class EditContact extends React.Component{
    
    constructor(props){
        super(props);
        const {id, name, email} = props.location.state.specificContact
        this.state={
            id, name, email
        };
    }
    submitForm = (e) =>{
        e.preventDefault();
        if(this.state.name === '' && this.state.email === ''){
            alert('The Fields are Needed !');
        }
        this.props.addContactHandler(this.state);
        this.setState({name:'', email:''});
        this.props.history.push('/');
    }
    render(){
        return(
            <div className="ui main">
                <h2>Update Contact</h2>
                <form className="ui form" onSubmit={this.submitForm}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text"
                         name="name" 
                         placeholder="Enter Name" 
                         value={this.state.name}
                         onChange={(e)=> this.setState({name: e.target.value})}
                         />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input 
                        type="text" 
                        name="email" 
                        value={this.state.email}
                        placeholder="Enter Email"
                        onChange={(e)=> this.setState({email: e.target.value})}
                        />
                    </div>
                    <button className="ui button blue"> Update </button>
                </form>
            </div>
        );
    }
}

export default EditContact;