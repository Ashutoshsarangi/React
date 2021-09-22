import React, {useState} from 'react';
import './App.css';
import ProfileInput from './profileInput';
import DisplayProfile from './displayProfile';
import FilterRecord from './filterRecord';

function App() {
  const [userList, setUserList] = useState([]);
  const saveUserInfo = (userInfo)=>{
    console.log('Inside App.js', userInfo);
    setUserList([...userList, userInfo])
  }
  
  return (  
    <section className="container">
      <article className="article1 addProfile">
        <ProfileInput saveUserInfo= {saveUserInfo}/>
      </article>
      <article className="article2">
      </article>
      <article className="article3">
        <FilterRecord/>
        <DisplayProfile userList={userList}/>
      </article>
    </section>
  );
}

export default App;
