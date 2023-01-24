import './App.css';
import Login from './components/Login';
import FaxApp from './components/FaxApp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="fax-app" element={<FaxApp />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

