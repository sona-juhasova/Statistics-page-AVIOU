import React from 'react';
import './graphs.css'; 
 

function Products({data}) {
  console.log(data);
    return (
      <div className='graph-wrapper'>
                <h3>Graph title</h3>
                <p>graph discription</p>


      <div className = "products" id="products_content" >
      {data.map((product) => (
          <div className="product">{product.product_title}</div>
        ))}
   
   </div>


   <p>graph summary</p>

</div>
  );
}


export default Products;