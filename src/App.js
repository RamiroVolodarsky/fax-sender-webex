import './App.css';
import Login from './components/Login';
import FaxApp from './components/FaxApp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/fax-sender-webex/fax-app" element={<FaxApp />} />
        <Route path="/fax-sender-webex" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

