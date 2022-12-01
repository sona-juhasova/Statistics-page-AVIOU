import {React,Component} from 'react';
import './graphs.css';

class Kpi extends Component
{
  constructor({ kpiData,selectedCatalogue })
  {
    super();
    console.log(selectedCatalogue);
    let data = kpiData.filter((x)=>{return (x.catalogue_id == selectedCatalogue)})[0];
    let allCatalogues = [{id:"",name:"None"}].concat(kpiData.filter((x)=>{return (x.catalogue_id != selectedCatalogue)})
    .map((x)=>{return {id:x.catalogue_id, name:x.catalogue_name};}))

    this.state = {
      selectedCatalogue: selectedCatalogue,
      kpiData: kpiData,
      dataCompare: null,
      data: data,
      allCatalogues: allCatalogues,
      selected: "",
    };
  }
  handleChange = e => {
    var dataCompare = this.state.kpiData.filter((x)=>{return (x.catalogue_id == e.target.value)})[0];
    this.setState({
      selected: e.target.value,
      dataCompare: dataCompare
    })
  }

  render () {
    let data = this.state.data;
    let dataCompare = this.state.dataCompare;
    console.log(this.state);

    // let sessions_total_all_time = 

    return (
      <div className="kpi">
  
        <div>
        <h2>KPI Summary - compared with {this.state.selected}</h2>
        <select onChange={this.handleChange} value={this.state.selected}>
           
          {this.state.allCatalogues.map(x=>{
              
              return <option key={x.id} value={x.id}>{x.name}</option>
          })}
        </select>
        </div>
  
        <div className="kpi-elements-wrapper">
          
          <div className='kpi-element'>
            <span className='kpi-element-header'>Number of sessions</span>
            <span className='kpi-element-number'>{data.sessions_total}</span>
            <div className='kpi-element-comparison'>
              <div>
                <span className='kpi-element-comparison-value'>+25%</span>
                <span className='kpi-element-comparison-label'>all time</span>
              </div>
              <div className="kpi-divider"></div>
              <div>
                <span className='kpi-element-comparison-value'>+25%</span>
                <span className='kpi-element-comparison-label'>last 30 days</span>
              </div>
            </div>
          </div>
  
  
          <div className='kpi-element'>
            <span className='kpi-element-header'>Average session duration (min)</span>
            <span className='kpi-element-number'>{data.average_session_duration}</span>
            <div className='kpi-element-comparison'>
              <div>
                <span className='kpi-element-comparison-value'>+25%</span>
                <span className='kpi-element-comparison-label'>all time</span>
              </div>
              <div className="kpi-divider"></div>
              <div>
                <span className='kpi-element-comparison-value'>+25%</span>
                <span className='kpi-element-comparison-label'>last 30 days</span>
              </div>
            </div>
          </div>
  
          <div className='kpi-element'>
            <span className='kpi-element-header'>Users completed catalogue (scrolled over 90%)</span>
            <span className='kpi-element-number'>{data.scrolled_over_90}%</span>
            <div className='kpi-element-comparison'>
              <div>
                <span className='kpi-element-comparison-value'>+25%</span>
                <span className='kpi-element-comparison-label'>all time</span>
              </div>
              <div className="kpi-divider"></div>
              <div>
                <span className='kpi-element-comparison-value'>+25%</span>
                <span className='kpi-element-comparison-label'>last 30 days</span>
              </div>
            </div>
          </div>
  
          <div className='kpi-element'>
            <span className='kpi-element-header'>Products added to basket</span>
            <span className='kpi-element-number'>{data.add_to_basket_total}</span>
            <div className='kpi-element-comparison'>
              <div>
                <span className='kpi-element-comparison-value'>+25%</span>
                <span className='kpi-element-comparison-label'>all time</span>
              </div>
              <div className="kpi-divider"></div>
              <div>
                <span className='kpi-element-comparison-value'>+25%</span>
                <span className='kpi-element-comparison-label'>last 30 days</span>
              </div>
            </div>
          </div>
  
          <div className='kpi-element'>
            <span className='kpi-element-header'>Value of products added to basket (DKK)</span>
            <span className='kpi-element-number'>{data.add_to_basket_value_total}</span>
            <div className='kpi-element-comparison'>
              <div>
                <span className='kpi-element-comparison-value'>+25%</span>
                <span className='kpi-element-comparison-label'>all time</span>
              </div>
              <div className="kpi-divider"></div>
              <div>
                <span className='kpi-element-comparison-value'>+25%</span>
                <span className='kpi-element-comparison-label'>last 30 days</span>
              </div>
            </div>
          </div>
  
          <div className='kpi-element'>
            <span className='kpi-element-header'>Average value of products added to basket (DKK)</span>
            <span className='kpi-element-number'>{data.add_to_basket_value_average}</span>
            <div className='kpi-element-comparison'>
              <div>
                <span className='kpi-element-comparison-value'>+25%</span>
                <span className='kpi-element-comparison-label'>all time</span>
              </div>
              <div className="kpi-divider"></div>
              <div>
                <span className='kpi-element-comparison-value'>+25%</span>
                <span className='kpi-element-comparison-label'>last 30 days</span>
              </div>
            </div>
          </div>
  
        </div>
  
      </div>
  
    );
  }
} 

export default Kpi;
