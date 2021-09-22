import React, {useState} from 'react';

function ProfileInput(props){
    const initialState = {
        name:'',
        email:'',
        gender:'',
        about:''
      }
    const [userInput, setUserInput] = useState(initialState);
    
    const inputHandler = (e)=>{
        let val = e.target.value;
        let na = e.target.name;
        userInput[`${e.target.name}`]= e.target.value;
        setUserInput({...userInput});
    }
    const onsubmit=(e)=>{
        e.preventDefault();
        props.saveUserInfo(userInput);
        setUserInput({...initialState});

    }
    return(
        <form>
        Name:- <input type="text" name="name" value={userInput.name} onChange={(e)=> inputHandler(e)}/>
        Email:- <input type="email" name="email" value={userInput.email} onChange={(e)=> inputHandler(e)}/>
        Gender:-
        <input type="radio" name="gender" id="male" value="male"
        checked={userInput.gender === 'male'}
        onChange={(e)=> inputHandler(e)}/> Male
        <input type="radio" name="gender" id="female" value="female"
        checked={userInput.gender === 'female'}
        onChange={(e)=> inputHandler(e)}/>Female
        About:-
        <textarea placeholder="About" name="about" value={userInput.about} onChange={(e)=> inputHandler(e)}></textarea>
        <input type="button" value="Add" onClick={(e)=> onsubmit(e)}/>
        </form>
    );
}

export default ProfileInput;