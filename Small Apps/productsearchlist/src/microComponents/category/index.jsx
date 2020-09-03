import React from 'react';

export function Category(props) {
  let temp = {};
  if (!temp[props.categoryName]) {
    console.log(props.categoryName);
    temp[props.categoryName] = 1;
    return (
      <div>
        {props.categoryName}
      </div>
    );
  }
  return '';
}