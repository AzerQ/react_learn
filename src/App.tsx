import React, {createElement as e, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Product} from "./components/Product";
import {products} from "./data/products";

function App() {
    const [count, setCount] = useState(0);
    useEffect(()=> {
        console.log('effect')
    }, []);
    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {
                products.map(product=> <Product product={product} key={
                    product.id
                }/>)
            }
        </div>
    );
}

export default App;
