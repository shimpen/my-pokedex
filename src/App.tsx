import { VFC } from 'react';
import Pokemons from './containers/pages/Pokemons';
import './App.css';

const App: VFC = () => <Pokemons enablePrefetch={false} />;

export default App;
