import './App.css';
import ConditionalRenderingComponent from './conditionalRenderingComponent';
import FormComponent from './formComponent';


function App() {

  // function testClick(){
  //   console.log('Button Clicked', this);
  // }
  const testClick = ()=>{
      console.log('Button Clicked', this);
  }
  const checkEvent = (Name, Age)=>{
      console.log('Button Clicked parameter passed', Name, Age);
  }
  return (
    <div className="App">
        <button onClick={testClick}>Hello</button>
        <button onClick={()=>checkEvent('BAC', 2133)}>Tes</button>
        <FormComponent/>
        <ConditionalRenderingComponent/>
    </div>
  );
}

export default App;
