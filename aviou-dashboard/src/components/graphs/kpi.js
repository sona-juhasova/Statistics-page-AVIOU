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
      selected: null,
    };
  }
  handleChange = e => {
    if(e.target.value !== ""){
    var dataCompare = this.state.kpiData.filter((x)=>{return (x.catalogue_id == e.target.value)})[0];
    this.setState({
      selected: e.target.value,
      dataCompare: dataCompare
    });}else{
      this.setState({
        selected: null,
        dataCompare: null
      });
    }
  }

  render () {


    return (
      <div className="kpi">
  
        <div>
        <h2>KPI</h2>
        <select onChange={this.handleChange} value={this.state.selected}>
           
          {this.state.allCatalogues.map(x=>{
              
              return <option key={x.id} value={x.id}>{x.name}</option>
          })}
        </select>
        <input placeholder="15.11.2022 - 25.11.2022"></input>
        </div>
  
        <div className="kpi-elements-wrapper">
          
          <div className='kpi-element'>
            <span className='kpi-element-header'>Number of sessions</span>
            <span className='kpi-element-number'>{this.state.data.sessions_total.toLocaleString("da-DK")}</span>

            {(this.state.dataCompare !== null) && <>
            <span className={(this.state.data.sessions_total/this.state.dataCompare.sessions_total)>1?"kpi-element-comparison_percentage percentage_positive":"kpi-element-comparison_percentage percentage_negative"}>{
              Math.abs((1-(this.state.data.sessions_total/this.state.dataCompare.sessions_total))* 100).toFixed(0).toLocaleString("da-DK")
            }%</span>
            <span className='kpi-element-comparison_catalogue'>{this.state.dataCompare.catalogue_name}</span>
            <span className='kpi-element-comparison_total'>{this.state.dataCompare.sessions_total.toLocaleString("da-DK")}</span>
            </>
            }
          </div>
  
  
          <div className='kpi-element'>
            <span className='kpi-element-header'>Average session duration (min)</span>
            <span className='kpi-element-number'>{this.state.data.average_session_duration.toLocaleString("da-DK")}</span>
           
             {(this.state.dataCompare !== null) && <>
            <span className={(this.state.data.average_session_duration/this.state.dataCompare.average_session_duration)>1?"kpi-element-comparison_percentage percentage_positive":"kpi-element-comparison_percentage percentage_negative"}>{
              Math.abs((1-(this.state.data.average_session_duration/this.state.dataCompare.average_session_duration))* 100).toFixed(0).toLocaleString("da-DK")
            }%</span>
            <span className='kpi-element-comparison_catalogue'>{this.state.dataCompare.catalogue_name}</span>
            <span className='kpi-element-comparison_total'>{this.state.dataCompare.average_session_duration.toLocaleString("da-DK")}</span>
            </>
            }
          </div>
  
          <div className='kpi-element'>
            <span className='kpi-element-header'>Users completed catalogue (scrolled over 90%)</span>
            <span className='kpi-element-number'>{this.state.data.scrolled_over_90.toLocaleString("da-DK")}%</span>
            
            {(this.state.dataCompare !== null) && <>
            <span className={(this.state.data.scrolled_over_90/this.state.dataCompare.scrolled_over_90)>1?"kpi-element-comparison_percentage percentage_positive":"kpi-element-comparison_percentage percentage_negative"}>{
              Math.abs((1-(this.state.data.scrolled_over_90/this.state.dataCompare.scrolled_over_90))* 100).toFixed(0).toLocaleString("da-DK")
            }%</span>
            <span className='kpi-element-comparison_catalogue'>{this.state.dataCompare.catalogue_name}</span>
            <span className='kpi-element-comparison_total'>{this.state.dataCompare.scrolled_over_90.toLocaleString("da-DK")}</span>
            </>
            }
          </div>
  
          <div className='kpi-element'>
            <span className='kpi-element-header'>Products added to basket</span>
            <span className='kpi-element-number'>{this.state.data.add_to_basket_total.toLocaleString("da-DK")}</span>
            
            {(this.state.dataCompare !== null) && <>
            <span className={(this.state.data.add_to_basket_total/this.state.dataCompare.add_to_basket_total)>1?"kpi-element-comparison_percentage percentage_positive":"kpi-element-comparison_percentage percentage_negative"}>{
              Math.abs((1-(this.state.data.add_to_basket_total/this.state.dataCompare.add_to_basket_total))* 100).toFixed(0).toLocaleString("da-DK")
            }%</span>
            <span className='kpi-element-comparison_catalogue'>{this.state.dataCompare.catalogue_name}</span>
            <span className='kpi-element-comparison_total'>{this.state.dataCompare.add_to_basket_total.toLocaleString("da-DK")}</span>
            </>
            }
          </div>
  
          <div className='kpi-element'>
            <span className='kpi-element-header'>Value of products added to basket (DKK)</span>
            <span className='kpi-element-number'>{this.state.data.add_to_basket_value_total.toLocaleString("da-DK")}</span>
            
            {(this.state.dataCompare !== null) && <>
            <span className={(this.state.data.add_to_basket_value_total/this.state.dataCompare.add_to_basket_value_total)>1?"kpi-element-comparison_percentage percentage_positive":"kpi-element-comparison_percentage percentage_negative"}>{
              Math.abs((1-(this.state.data.add_to_basket_value_total/this.state.dataCompare.add_to_basket_value_total))* 100).toFixed(0).toLocaleString("da-DK")
            }%</span>
            <span className='kpi-element-comparison_catalogue'>{this.state.dataCompare.catalogue_name}</span>
            <span className='kpi-element-comparison_total'>{this.state.dataCompare.add_to_basket_value_total.toLocaleString("da-DK")}</span>
            </>
            }
          </div>
  
          <div className='kpi-element'>
            <span className='kpi-element-header'>Average value of products added to basket (DKK)</span>
            <span className='kpi-element-number'>{this.state.data.add_to_basket_value_average.toLocaleString("da-DK")}</span>
          
            {(this.state.dataCompare !== null) && <>
            <span className={(this.state.data.add_to_basket_value_average/this.state.dataCompare.add_to_basket_value_average)>1?"kpi-element-comparison_percentage percentage_positive":"kpi-element-comparison_percentage percentage_negative"}>{
              Math.abs((1-(this.state.data.add_to_basket_value_average/this.state.dataCompare.add_to_basket_value_average))* 100).toFixed(0).toLocaleString("da-DK")
            }%</span>
            <span className='kpi-element-comparison_catalogue'>{this.state.dataCompare.catalogue_name}</span>
            <span className='kpi-element-comparison_total'>{this.state.dataCompare.add_to_basket_value_average.toLocaleString("da-DK")}%</span>
            </>
            }
          </div>
  
        </div>
  
      </div>
  
    );
  }
} 

export default Kpi;
