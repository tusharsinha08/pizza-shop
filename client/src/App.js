import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Homesreen from './screens/Homesreen';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homesreen/>
    </div>
  );
}

export default App;
