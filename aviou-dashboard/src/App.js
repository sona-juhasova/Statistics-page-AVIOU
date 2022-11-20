
import './App.css';
import Menu from './components/menu/menu.js';
import Header from './components/header/header.js';
import Navigation from './components/navigation/navigation.js';
import Content from './components/content/content.js';


function App() {
  return (
    <div className="app">
      <Menu /> 
      <div className="app-content-wrapper">
      <Header /> 
      <div className="app-content">
      <Navigation />
        <Content catalogue_id={"black-friday"}/>
      </div>
    </div>
    </div>
  );
}

export default App;
