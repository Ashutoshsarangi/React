import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const App = React.lazy(()=> import('./Component/App'));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading .... </div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
