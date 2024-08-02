import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Greeting } from './components/Greeting';
import { Authorization } from './components/Auth/Authorization';
import { Registration } from './components/Auth/Registration';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
