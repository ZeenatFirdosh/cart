import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Product from './components/Product';
import { StateContext } from './context/StateContext';

function App() {
  return (
    <div>
      <StateContext>
      <Navbar/>
      <Product />
      </StateContext>
    </div>
  );
}

export default App;
