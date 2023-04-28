import './App.css';
import Navbar from './components/Navbar';
import Homepage from './screens/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
