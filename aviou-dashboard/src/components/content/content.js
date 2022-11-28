import './content.css';
import Kpi from '../graphs/kpi.js'; 
import Sessions from '../graphs/sessions.js'; 
import Sections from '../graphs/sections.js'; 
import Scrolling from '../graphs/scrolling.js'; 
import Products from '../graphs/products.js'; 

import KPI_data from '../../sample_data/kpi.json';
import Sessions_data from '../../sample_data/sessions.json'
import Sections_data from '../../sample_data/section-views.json'
import Scrolling_data from '../../sample_data/scrolling.json'
import Products_data from '../../sample_data/products.json'





function Content({catalogue_name,catalogue_id}) {
  return (
    <div className="content">
       <div className="content-wrapper">
      <h1>Catalogue name</h1>
      <h2>date</h2>

      <Kpi  data={KPI_data.filter((item)=>{ return item.catalogue_id === catalogue_id})[0]}/>

      <Sessions data={Sessions_data}/>
      <Scrolling data={Scrolling_data}/>
      <Sections data={Sections_data}/>
      <Products  data={Products_data}/>
      

      </div>

    </div>
  );
}

export default Content;
