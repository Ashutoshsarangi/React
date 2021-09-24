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
  const [userSearch, setUserSearch] = useState("");
  const [filterData, setFilterData] = useState(userList);

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

  const deleteUser = (userInfo)=>{
    setUserList(userList.filter((user)=>{
      if(user.id !== userInfo.id){
        return user;
      }
    }))
  }
  const handleSearchFilter = (temp)=>{
    console.log('val',temp);
    setUserSearch(temp);
    console.log(userSearch);
    // setFilterData(filterData.filter((data)=>{
    //   console.log(Object.values(data).join('') + '  ----- >' + val);
    //   if(Object.values(data).join('').includes(val)){
    //     return data;
    //   }
    // }));
    console.log('end', userSearch);

  }
  
  return (  
    <section className="container">
      <article className="article1 addProfile">
        <ProfileInput saveUserInfo= {saveUserInfo} isUpdate={isUpdate} updateState={updateState}/>
      </article>
      <article className="article2">
      </article>
      <article className="article3">
        <FilterRecord userSearch={userSearch} handleSearchFilter={handleSearchFilter}/>
        {
          userList.length === 0 ? 'No Data Available' :
        <DisplayProfile userList={userSearch.length >1 ? filterData : userList} updateUser={updateUser} deleteUser={deleteUser}/>
        }
      </article>
    </section>
  );
}

export default App;
