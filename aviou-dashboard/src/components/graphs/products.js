import React from 'react';
import './graphs.css'; 
 

function Products({data}) {
  console.log(data);
    return (
      <div className = "products" id="products_content" >
      {data.map((product) => (
          <div className="user">{product.product_title}</div>
        ))}
   
   </div>
  );
}


export default Products;