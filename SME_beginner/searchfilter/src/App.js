import React, { Suspense } from 'react';

const SearchFilter = React.lazy(()=>import('./searchFilter'));

function App() {
  const searchVal = (item)=>{
    console.log('---- > ', item);
  }
  return (
    <>
      <Suspense fallback={<div>Loading .....</div>}>
          <SearchFilter searchVal={searchVal}/>
      </Suspense>
    </>
  );
}

export default App;
