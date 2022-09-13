import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Error404 from './pages/Error404';

function App() {
  return (
    <div className='app'>
      <Router>
    <Routes>
      <Route path="*" element={<Error404 />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
    </div>
  );
}

export default App;
