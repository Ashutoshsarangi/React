import logo from './logo.svg';
import './App.css';
import Header from './header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    // We will be USing BEM convention
    <div className="app">
      {/*Header Component*/}
      <Header />
      {/*Tinder Card Component*/}
      <TinderCards />
      {/*Swipe Buttons*/}
      <SwipeButtons />
    </div>
  );
}

export default App;
