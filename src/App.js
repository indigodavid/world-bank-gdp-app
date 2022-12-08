import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './pages/Home';
import Details from './pages/Details';
import Countries from './pages/Countries';
import Navbar from './components/Navbar';
import { searchSlice } from './redux/search/search';

function App() {
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(searchSlice.actions.clearCurrent());
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries/:regionCode" element={<Countries />} />
        <Route path="/details/:countryCode" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
