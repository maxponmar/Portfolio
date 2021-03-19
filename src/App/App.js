import './App.scss'
import Header from '../Shared/Header/Header'
import Home from '../Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
      </main>
    </div>
  );
}

export default App;
