import './App.css';
import Header from './components/Header/Header';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='module-13-challenge-react-portfolio/' element={<Homepage />} />
          <Route path='module-13-challenge-react-portfolio/projects' element={<Projects />} />
          <Route path='module-13-challenge-react-portfolio/contact' element={<Contact />} />
        </Routes>
      </Router>
      
    </div>

  );
}

export default App;
