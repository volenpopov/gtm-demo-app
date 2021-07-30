import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux'
import { setBuyerData, setSellerData } from './store'

function App() {
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ marginBottom: '45px' }}>
          <button style={{ marginRight: '15px' }}>Test NT A</button>
          <button>Test SST A</button>
        </div>
        <div>
          <button
            onClick={() => dispatch(setBuyerData())}
            style={{ marginRight: '15px' }}
          >
            Test Redux NT B
          </button>
          <button onClick={() => dispatch(setSellerData())}>Test Redux SST B</button>
        </div>
      </header>
    </div>
  );
}

export default App;
