import React from 'react';

export function TextArea(props) {
  const { name, placeholder, val, handler } = props;
  return (
    <>
      <textarea name={name} placeholder={placeholder} value={val} onChange={(e) => handler(e)}></textarea>
    </>
  );
}