import './content.css';
import Kpi from '../graphs/kpi.js'; 
import Sessions from '../graphs/sessions.js'; 
import Sections from '../graphs/sections.js'; 
import Scrolling from '../graphs/scrolling.js'; 
import Products from '../graphs/products.js'; 

import KPI_data from '../../sample_data/kpi.json';
import Sessions_data from '../../sample_data/sessions.json'
import Sections_data from '../../sample_data/section-views.json'



function Content({catalogue_name,catalogue_id}) {
  return (
    <div className="content">
      <h1>Title of the catalogue</h1>
      <h2>date</h2>

      <Kpi  data={KPI_data.filter((item)=>{ return item.catalogue_id === catalogue_id})[0]}/>
      <Sessions data={Sessions_data}/>
      <Scrolling />
      <Sections data={Sections_data}/>
      <Products />



    </div>
  );
}

export default Content;
