import './content.css';
import Kpi from '../graphs/kpi';
import Sessions from '../graphs/sessions';
import Scrolling from '../graphs/scrolling.js';
import Sections from '../graphs/sections.js';
import Products from '../graphs/products.js'; 
import KPI_data from '../../sample_data/kpi.json';


function Content({catalogue_name,catalogue_id}) {
  return (
    <div className="content">
      <h1>Title of the catalogue</h1>
      <h2>date</h2>

      <Kpi  data={KPI_data.filter((item)=>{ return item.catalogue_id === catalogue_id})[0]}/>
      <Sessions />
      <Scrolling />
      <Sections />
      <Products />



    </div>
  );
}

export default Content;
