import React from 'react';
import './style.css';
import { Category } from '../category';

export function ProductList(props) {
  const itemList = props.itemList
  let temp = {};
  function Helper(props) {
    const categoryName = props.categoryName;
    console.log(categoryName);
    if (!temp[categoryName]) {
      console.log(temp);
      temp[categoryName] = 1;
      return <div> {categoryName}</div>;
    }
    return '';
  }
  const listRender = itemList.map((item) =>
    <div key={item.id}>
      <Helper categoryName={item.category} />
      <span className={item.stocked ? '' : 'outOfStock'}>{item.name}</span>
      <span>{item.price}</span>
    </div>
  )
  return (
    <div>
      <div>
        <span>Name</span>
        <span>Price</span>
      </div>
      {listRender}
    </div>
  );
}