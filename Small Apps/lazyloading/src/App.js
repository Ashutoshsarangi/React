import React, { lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
// Importing the MyComponent as lazy

const MyComponent = lazy(() => { return import('./components/myComponent') });

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>My Another Component</div>
        <Suspense fallback={<div>Loading .....</div>}>
          <MyComponent></MyComponent>
        </Suspense>
      </header>
    </div>
  );
}

export default App;
