import { Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import Details from './pages/Details';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Details country="Ecuador" />} />
    </Routes>
  );
}

export default App;
