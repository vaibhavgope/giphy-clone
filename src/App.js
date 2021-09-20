import './App.css';
import GifGrid from './components/GifGrid/GifGrid';
import Header from './components/Header';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <GifGrid />
    </div>
  );
}

export default App;
