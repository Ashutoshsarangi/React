import React, {useState} from 'react';
import './App.css';
import ProfileInput from './profileInput';
import DisplayProfile from './displayProfile';
import FilterRecord from './filterRecord';
import { v4 as uuidv4 } from 'uuid';


function App() {
  
  const [updateState, setUpdateState] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);
  const [userList, setUserList] = useState([]);
  const saveUserInfo = (userInfo)=>{
    if(isUpdate){
      setUserList(userList.map((user)=>{
        if(user.id === userInfo.id){
          return userInfo;
        }else{
          return user;
        }
      }));
      setIsUpdate(false);
    }else{
      setUserList([...userList, {...userInfo, id: uuidv4()}])
    }
  }
  const updateUser = (user)=>{
    setUpdateState({...user});
    setIsUpdate(true);
  }
  
  return (  
    <section className="container">
      <article className="article1 addProfile">
        <ProfileInput saveUserInfo= {saveUserInfo} isUpdate={isUpdate} updateState={updateState}/>
      </article>
      <article className="article2">
      </article>
      <article className="article3">
        <FilterRecord/>
        <DisplayProfile userList={userList} updateUser={updateUser}/>
      </article>
    </section>
  );
}

export default App;
