import React from 'react';


class FormComponent extends React.Component{
    formSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submit', this); // In Class based Component we are getting access of this 
                                        // in Arrow Functions.
    }
    render(){
        return(
            <form onSubmit={this.formSubmit}>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default FormComponent;