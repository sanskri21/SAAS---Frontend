import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import ProfilePage from './pages/ProfilePage';
import BroSplitPage from './pages/BroSplitPAge'
import PPLpage from './pages/PPLpage';
function App() {
  return (
   <>
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/brosplit" element={<BroSplitPage />} />
        <Route path="/pplpage" element={<PPLpage />} />
      </Routes>
    </Router>
   </>
  );
}
export default App;
