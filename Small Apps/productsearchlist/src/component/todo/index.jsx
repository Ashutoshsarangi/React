import React, { Component } from 'react';
import { ProductSearch } from '../../microComponents/productSearch';
import { ProductList } from '../../microComponents/productList';
const List = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football", id: "1" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball", id: "2" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball", id: "3" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch", id: "4" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5", id: "5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7", id: "6" }
];
export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItem: List,
      productSearch: '',
      onlyInStock: false
    }
  }
  handleInputChange(event) {
    let newList;
    if (event.target.value) {
      newList = this.state.listItem.filter((item) => {
        return (item.name.toLowerCase()).includes(event.target.value.toLowerCase());
      });
    } else {
      newList = List// default List
    }
    console.log(newList);
    this.setState({
      productSearch: event.target.value,
      listItem: newList
    });
  }
  handleCheckBoxChange(event) {
    let newList;
    if (event.target.checked) {
      newList = this.state.listItem.filter((item) => {
        return item.stocked;
      });
    } else {
      newList = List// default List
    }
    console.log(newList);
    this.setState({
      onlyInStock: event.target.checked,
      listItem: newList
    });
  }
  render() {
    const list = this.state.listItem;
    return (
      <div>
        <ProductSearch
          productSearch={this.state.productSearch}
          onlyInStock={this.state.onlyInStock}
          InputHandler={(event) => this.handleInputChange(event)}
          CheckBoxHandler={(event) => this.handleCheckBoxChange(event)}
        />
        <ProductList itemList={list} />
      </div >
    );
  }
}