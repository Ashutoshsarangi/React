import React, {useState, useEffect} from 'react';

function ProfileInput(props){
    const temp ={
        id: '',
        name:'',
        email:'',
        gender:'',
        about:''
      };
    const [userInput, setUserInput] = useState(temp);

    useEffect(()=>{
        if(props.isUpdate){
            setUserInput({...props.updateState});
        }
    }, [props.isUpdate]);
    useEffect(()=>{
        throw new Error('Check ,..');
    }, []);
    
    const inputHandler = (e)=>{
        userInput[`${e.target.name}`]= e.target.value;
        setUserInput({...userInput});
    }
    const onsubmit=(e)=>{
        e.preventDefault();
        setUserInput({...temp});
        props.saveUserInfo({...userInput});

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
        <button type="button" onClick={(e)=> onsubmit(e)}>{props.isUpdate ? 'Update' : 'Add'}</button>
        </form>
    );
}

export default ProfileInput;