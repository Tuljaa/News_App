import './App.css';
import TableData from './components/TableData';
import NavBar from './components/NavBar';
import { useRef } from 'react';

function App() {
  const searchRef = useRef(null);
  const handleSearch = () => {
    const doc = searchRef.current
  }
  return (
    <div className="App">
      <header className="App-header">
        NEWS BROADCAST
        <input type='search' placeholder='SEARCH' 
        className='searchBar' 
        onClick={handleSearch}
        ref={searchRef}
        />
      </header>
      <div className='section-nav'>
        <nav>
          <NavBar />
        </nav>
        <section>
          <TableData />
        </section>
      </div>
    </div>
  );
}

export default App;
