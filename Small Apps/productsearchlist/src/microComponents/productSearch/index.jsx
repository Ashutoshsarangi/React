import React, { Component } from 'react';


export function ProductSearch(props) {
  const val = props.productSearch;
  return (
    <div>
      <input name="productSearch" value={val} onChange={(e) => props.InputHandler(e)} placeholder="Enter Product Name" />
      <input type="checkbox" name="onlyInStock" onChange={(e) => props.CheckBoxHandler(e)} checked={props.onlyInStock} />
      <span>Only Show Products in the Stock </span>
    </div>
  );
}