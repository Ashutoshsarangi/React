import React, { useEffect } from 'react';

let renderCounter = 0;

export default function Child() {
  useEffect(() => {
    renderCounter++;
  });
  return (
    <div>{renderCounter}</div>
  );
}