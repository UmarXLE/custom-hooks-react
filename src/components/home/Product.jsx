import React, {useEffect, useState} from 'react';
import axios from "axios";
import ProductCard from "../../ui/ProductCard";


const Product = () => {

  const accessToken = localStorage.getItem("accessToken")
  console.log(accessToken)
  const [products , setProducts] = useState([])

  console.log(products)


  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=10")
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => console.log("error"))
  },[])




  return (
    <div>
      {
        products?.map(product => (
          <ProductCard key={product?.id}   product={product} />
        ))
      }
    </div>
  );
};


export default Product;