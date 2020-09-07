import React from 'react';

export function Input(props) {
  const { name, placeholder, val, handler } = props;
  return (
    <div>
      <input type="text" placeholder={placeholder} name={name} value={val} onChange={(e) => handler(e)} />
    </div>
  );
}