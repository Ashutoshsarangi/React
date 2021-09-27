import React, {Suspense, useState} from 'react';
import './App.css';
import Fallback from './fallBack';
import { v4 as uuidv4 } from 'uuid';
import ErrorBoundary from './errorBoundary';

const ProfileInput = React.lazy(()=> import('./profileInput'));
const DisplayProfile = React.lazy(()=> import ('./displayProfile'));
const FilterRecord = React.lazy(()=>import('./filterRecord'));



function App() {
  
  const [updateState, setUpdateState] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);
  const [userList, setUserList] = useState([]);
  const [filterData, setFilterData] = useState(userList);
  const [useSearchData, setSearchData] = useState(false);

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
    if(temp !== ''){
      setSearchData(true);
      setFilterData(filterData.filter((data)=>{
        console.log(Object.values(data).join('') + '  ----- >' + temp);
        if(Object.values(data).join('').includes(temp)){
          return data;
        }
      }));
    }else{
      setSearchData(false);
      setFilterData(userList);
    }

  }
  
  return (  
    <section className="container">
      <article className="article1 addProfile">
        <Suspense fallback={<Fallback/>}>
          <ErrorBoundary>
            <ProfileInput saveUserInfo= {saveUserInfo} isUpdate={isUpdate} updateState={updateState}/>
          </ErrorBoundary>
        </Suspense>
      </article>
      <article className="article2">
      </article>
      <article className="article3">
        <Suspense fallback={<Fallback/>}>
        <FilterRecord handleSearchFilter={handleSearchFilter}/>
        </Suspense>
        {
          userList.length === 0 ? 'No Data Available' :
          <Suspense fallback={<Fallback/>}>
            <DisplayProfile userList={useSearchData ? filterData:userList} updateUser={updateUser} deleteUser={deleteUser}/>
          </Suspense>
        }
      </article>
    </section>
  );
}

export default App;
