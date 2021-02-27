import './App.css';
import Romanji from './components/Romanji.js';
import Hiragana from './components/Hiragana.js';
import Katakana from './components/Katakana.js';
import Interaction from './components/Interaction.js';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="titlesplash">KANAMATCH</div>
      </div>
      <Interaction />
      <div className="kanacontainer">
        <Romanji />
        <Hiragana />
        <Katakana />
      </div>
    </div>
  );
}

export default App;
