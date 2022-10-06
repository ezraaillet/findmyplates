import './App.css';

import Home from './Home';
import Result from './result/Result.js';
import Search from './input/Search';

function App() {
  return (
    <>
      <div className='app'>
        <div className='home'><Home /></div>
        <div className='search'><Search /></div>
        <div className='result'><Result /></div>
      </div>
    </>
  )
}

export default App;
