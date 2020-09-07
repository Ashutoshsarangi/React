import React from 'react';

export function Button(props) {
  const { name, handler } = props;
  return (
    <>
      <button onClick={() => handler()}>{name}</button>
    </>
  );
}