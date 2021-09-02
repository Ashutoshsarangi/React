import {useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [userForm, setUserForm] = useState({
    name:'',
    email:'',
    food:'na',
    gender:'male',
    profilePic: null
  });
  const formHandler = async (e)=>{
    e.preventDefault();
    console.log(userForm);
    const formData = new FormData();
    Object.keys(userForm).map((key)=>{
      if(key !== 'profilePic'){
        formData.append(key, userForm[key]);
      }else{
        formData.append(key, userForm[key], userForm[key].name);
      }
    })
    console.log(formData);
    await axios.post('https://reqres.in/api/users', formData);
  }
  return (
    <form className="App" onSubmit={(e)=>formHandler(e)}>
      <input type="text" name="username" placeholder="Enter Name" 
      value={userForm.name} 
      onChange={ (e)=>{
        setUserForm({ ...userForm, name: e.target.value});
      }}
      />
      <input type="email" name="email" 
      placeholder="Enter Email"
      value={userForm.email}
      onChange={(e)=>{
        setUserForm({...userForm, email: e.target.value});
      }}
      />
      <select value={userForm.food} onChange={(e)=>{
        // console.log(e.target.value);
        setUserForm({...userForm, food: e.target.value});
      }}
      >
        <option value='na'>Select One</option>
        <option value='veg'>Veg</option>
        <option value='nonveg'>Non Veg</option>
        <option value='both'>Both</option>
      </select>
      <input type="radio" name="gender" id="male" value="male"
      checked={userForm.gender === 'male'}
      onChange={(e)=>{
        setUserForm({...userForm, gender: e.target.value});
      }}
      /> Male
      <input type="radio" name="gender" id="female" value="female"
      checked={userForm.gender === 'female'}
      onChange={(e)=>{
        setUserForm({...userForm, gender: e.target.value});
      }}
      /> Female
      <input type="file" name="profilePic" onChange={(e)=>{
        setUserForm({...userForm, profilePic: e.target.files[0]});
      }}/>
      <button>Submit</button>
    </form>
  );
}

export default App;
