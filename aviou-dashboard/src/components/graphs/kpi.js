import './graphs.css'; 

function Kpi({data}) {
  console.log(data);
    return (
    <div className="kpi">
        <p>add_to_basket_value_total is {data.add_to_basket_value_total}</p>
      


    </div>
  );
}

export default Kpi;
