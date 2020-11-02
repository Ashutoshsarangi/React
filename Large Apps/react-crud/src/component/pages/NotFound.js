import React from 'react';
import { Button } from 'react-bootstrap';

const NotFound = (props) => {
  return (
    <div className="not-found">
      <h1 className="display-1">Page Not Found</h1>
      <Button onClick={() => props.history.push('/home')}>Home</Button>
    </div>
  );
}
export default NotFound;