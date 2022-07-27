import { Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/countries/:country" element={<Details />} />
    </Routes>
  );
}

export default App;
