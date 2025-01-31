import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Mining from './components/Mining';
import CreatePiece from './components/CreatePiece';
import CreateItem from './components/CreateItem';
import Upgrade from './components/Upgrade';
import Inventory from './components/Inventory';
import Store from './components/Store';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mining" element={<Mining />} />
        <Route path="/create_piece" element={<CreatePiece />} />
        <Route path="/create_item" element={<CreateItem />} />
        <Route path="/upgrade" element={<Upgrade />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </Router>
  );
}
