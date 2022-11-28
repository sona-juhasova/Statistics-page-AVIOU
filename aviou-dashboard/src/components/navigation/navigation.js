import './navigation.css';

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation-wrapper">

        <div className="nav-el nav-el-active">
          <div className="nav-indicator"></div>
          <p className="nav-label">KPI Summary</p>
        </div>

        <div className="nav-el">
          <div className="nav-indicator"></div>
          <p className="nav-label">New user session</p>
        </div>

        <div className="nav-el">
          <div className="nav-indicator"></div>
          <p className="nav-label">Scrolling</p>
        </div>

        <div className="nav-el">
          <div className="nav-indicator"></div>
          <p className="nav-label">Section views</p>
        </div>

        <div className="nav-el">
          <div className="nav-indicator"></div>
          <p className="nav-label">Products</p>
        </div>

      </div>
    </div>
  );
}

export default Navigation;
