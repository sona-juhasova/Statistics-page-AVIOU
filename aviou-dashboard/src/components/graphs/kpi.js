import './graphs.css';

function Kpi({ data }) {
  console.log(data);
  return (
    <div className="kpi">


      <h2>KPI Summary</h2>


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
          <span className='kpi-element-header'>Scrolled over 90% (users)</span>
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
          <span className='kpi-element-header'>Value of products added to basket</span>
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
          <span className='kpi-element-header'>Average value of products added to basket</span>
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

export default Kpi;
