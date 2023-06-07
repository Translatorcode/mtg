import Navbar from './components/Navbar';
import MortgageApplication from './screens/MortgageApplication';
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
