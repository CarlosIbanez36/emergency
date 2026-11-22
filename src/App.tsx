import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { EmergencyButton } from './components/EmergencyButton';
import { SearchBar } from './components/SearchBar';

function App() {
  const activarEmergencia = () => {
    alert('🚨 ¡Dosis de funk administrada! 🎷 (la música llega en la misión 3)');
  };

  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) return;

    const buscar = async () => {
      const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=24`;
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      console.log(data.results);
    };

    buscar();
  }, [query]);

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EmergencyButton label="BREAK GLASS" onActivate={activarEmergencia} />
        <SearchBar value={query} onChange={setQuery} />
      </main>
    </div>
  );
}

export default App;