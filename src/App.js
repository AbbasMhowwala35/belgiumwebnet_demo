import Header from './components/header/Header';
import Topnav from './components/header/Topnav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>    
    <Router>
      <Topnav></Topnav>
      <Header></Header>
      </Router>
    </div>
  );
}

export default App;