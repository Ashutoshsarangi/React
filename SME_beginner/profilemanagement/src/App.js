import './App.css';
import ProfileInput from './profileInput';
import DisplayProfile from './displayProfile';
import FilterRecord from './filterRecord';

function App() {
  return (  
    <section className="container">
      <article className="article1 addProfile">
        <ProfileInput/>
      </article>
      <article className="article2">
      </article>
      <article className="article3">
        <FilterRecord/>
        <DisplayProfile/>
      </article>
    </section>
  );
}

export default App;
