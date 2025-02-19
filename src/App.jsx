import './App.css'
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

function App() {


  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="hero_section">
          <HomePage />
        </section>
      </main>
    </>
  )
}

export default App
