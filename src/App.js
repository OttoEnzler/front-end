import Main from './views/Main';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Details from './views/Details';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element= {<Main  />} />
          <Route path="products/:id" element= {<Details  />} />
          <Route path="/products/update/:id" element= {<EditProduct  />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
