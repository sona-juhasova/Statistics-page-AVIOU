import React from 'react';
import Table from '../sortable-table/table';
import './graphs.css';


function Products({ data }) {
  console.log(data);
  var columns = ["Product title","Section","Views","Hotspot clicked","Link clicked","Added to basket", "Estimated revenue (DKK)"];
  var columns=[
    { label: "Product title", accessor: "product_title", sortable: true},
    { label: "Section", accessor: "section", sortable: true },
    { label: "Views", accessor: "views", sortable: true, format: function(value){return value.toLocaleString("da-DK")}},
    { label: "Hotspot clicked", accessor: "hotspot_clicks", sortable: true , format: function(value){return value.toLocaleString("da-DK")}},
    { label: "Link clicked", accessor: "link_clicked", sortable: true , format: function(value){return value.toLocaleString("da-DK")}},
    { label: "Added to basket", accessor: "added_to_basket", sortable: true , format: function(value){return value.toLocaleString("da-DK")}},
    { label: "Estimated revenue (DKK)", accessor: "estimated_revenue", sortable: true, format: function(value){return value.toLocaleString("da-DK")}},
  ];
  return (
    
    <div className='graph-wrapper-products'>
       <div className='products-wrapper'>
      <h3>Products</h3>
      <p>Overview of user engagement on individual products</p>

      <Table caption="" data={data} columns={columns} >
      </Table>


      </div>


    </div>
  );
}


export default Products;