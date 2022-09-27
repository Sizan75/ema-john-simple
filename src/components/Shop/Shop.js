import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { addToDb, getStoredCart} from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])
    const handleAddToCart =(product) =>{
      const newCart =[...cart, product];
      setCart(newCart);
      addToDb(product.id);
    }

    useEffect(() =>{
      const storedCart= getStoredCart();
      const savedCart= [];
      for(const id in storedCart){
        const addedProduct = products.find(product => products.id === id);
        if(addedProduct){
          const quantity= storedCart[id];
          addedProduct.quantity= quantity;
          
          savedCart.push(addedProduct)
        }
      }
      setCart(savedCart);
    }, [products])

    return (
        <div className='shop'>
          <div className="products-container">
              { 
              products.map(product => <Product 
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
              ></Product> )
            }       
  </div>
          <div className="cart-container">
               
               <Cart cart={cart}></Cart>
        </div>  
        </div>
    );
};

export default Shop;