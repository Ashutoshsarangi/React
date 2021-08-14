import logo from './logo.svg';
import './App.css';

function sayHello(user){
  return <h1> Welcome to you {user.name} {user.age} </h1>
}

function App() {
  const user = {
    name: "ashu",
    age: 1233,
    gender :'Male',
    college:'addd',
    school: 'ZZZZZ'
  }
  const temp = [1,2,3,4,5]
  return (
    <div className="App">
        <h1>Hello World</h1>
        {
          temp.map((data)=>{
            return <span>{data}</span>;
          })
        }
        <ul>
        {
          Object.keys(user).map((key)=>{
            return <li>{key + '--->'+ user[key]}</li>
          })
        }
        </ul>
        {sayHello(user)}
    </div>
  );
}

export default App;
