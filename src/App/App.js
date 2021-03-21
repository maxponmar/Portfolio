import './App.scss'
import Header from '../Shared/Header/Header'
import Home from '../Components/Home/Home';
import About from '../Components/About/About';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
