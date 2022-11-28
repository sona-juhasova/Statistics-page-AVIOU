
import './header.css';

function Header() {
  return (
    <div className="header">
      <h1>Statistics</h1>
      <div className="buttons">
        <div className="header-button">Share</div>
        <div className="header-button">Download PDF</div>
        <div className="header-button">Print</div>
        <div className="header-button">Show in publication</div>
        <div className="header-button"><svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 9.2 14.2" fill="currentColor" height="12" data-av-icon="true">
<path d="M8.2,6.1l-5-5c-0.6-0.6-1.5-0.6-2.1,0c-0.6,0.6-0.6,1.5,0,2.1L5,7.1l-3.9,3.9c-0.6,0.6-0.6,1.5,0,2.1
	c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4l5-5C8.8,7.6,8.8,6.6,8.2,6.1z"></path>
</svg>Back</div>
      </div>
    </div>
  );
}

export default Header;
