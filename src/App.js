// import './App.css';
import Navbar from './components/Navbar';
import Homepage from './screens/Homepage';
import MortgagePayCalc from './components/MortgagePayCalc';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.scss';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Homepage />}></Route>
          </Routes>
        </main>
      </Router>
    </Provider>
  );
}

export default App;
