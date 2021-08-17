import './App.css';
import FilterProduct from './Component/filterProduct';
import ProductList from 'Component/productList';
const rows = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

function App() {
  return (
    <div className="App">
      <FilterProduct/>
      {
        rows.filter(()=>{

        })
      }
      <ProductList category="Sporting Goods" rows={rows}/>
    </div>
  );
}

export default App;
