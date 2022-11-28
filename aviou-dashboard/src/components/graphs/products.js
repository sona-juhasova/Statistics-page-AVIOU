import React from 'react';
import './graphs.css';


function Products({ data }) {
  console.log(data);
  return (
    <div className='graph-wrapper-products'>
       <div className='products-wrapper'>
      <h3>Products</h3>
      <p>Overview of user engagement on individual products</p>

      <table className='products-table'>

    

      <div  id="products_content" >

      <tr className='row-header'>
              <td className="product">Product title</td>
              <td className="product">Section</td>
              <td className="product">Views</td>
              <td className="product">Hotspot clicked</td>
              <td className="product">Link clicked</td>
              <td className="product">Added to basket</td>
              <td className="product">Estimated revenue (DKK)</td>
              

            </tr>

        {data.map((product) => (

       
            <tr className='products-table-row'>
              <td className="product product-title">{product.product_title}</td>
              <td className="product">{product.section}</td>
              <td className="product">{product.views}</td>
              <td className="product">{product.hotspot_clicks}</td>
              <td className="product">{product.link_clicked}</td>
              <td className="product">{product.added_to_basket}</td>
              <td className="product">{product.estimated_revenue}</td>

            </tr>
        

        ))}
 
      </div>

      </table>



      </div>


    </div>
  );
}


export default Products;