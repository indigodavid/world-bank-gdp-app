import { Route, Routes } from 'react-router-dom';
import './styles/App.scss';
import Home from './pages/Home';
import Details from './pages/Details';
import Countries from './pages/Countries';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/countries/:regionCode" element={<Countries />} />
      <Route path="/details/:countryCode" element={<Details />} />
    </Routes>
  );
}

export default App;
