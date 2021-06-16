import './App.css';
import ProductForm from './components/ProductForm';
import React, {useState} from 'react';
// import {Router} from '@reach/router';

function App() {
  const[productList, setProductList] = useState([]);

  return (
    <div className="App">
      <ProductForm productList = {productList} setProductList = {setProductList}/>
    </div>
  );
}

export default App;
