// import './App.css';
import Navbar from './components/Navbar';
import MortgageApplication from './screens/MortgageApplication';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './scss/App.css';

function App() {
  return (
    <Provider store={store}>
      <main>
        <Navbar />
        <MortgageApplication />
      </main>
    </Provider>
  );
}

export default App;
