import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Authorization } from './components/Auth/Authorization';
import { Registration } from './components/Auth/Registration';
import { HomePage } from './pages/HomePage';
import { ChangePassword } from './components/Auth/ChangePassword';
import { CharacterPage } from './pages/CharacterPage';
import { TrainingPage } from './pages/TrainingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/character" element={<CharacterPage />} />
        <Route path="/training" element={<TrainingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
