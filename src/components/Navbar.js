import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdArrowBackIosNew, MdClose, MdSearch } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { searchSlice } from '../redux/search/search';

const Navbar = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const regions = useSelector((state) => state.regions);
  const { pathname } = useLocation();
  const pathElements = pathname.split('/');
  const title = pathElements[1] || 'World Bank GDP data';
  const currentCountry = countries.find((country) => country.id === pathElements[2]);
  const currentRegion = regions.find((region) => region.code === pathElements[2]);
  const detail = currentRegion?.name || currentCountry?.name;
  let link = '/';

  if (title === 'countries') {
    link = '/';
  }
  if (title === 'details') {
    link = `/countries/${currentCountry.region.id}`;
  }
  const handleClickMenu = () => {
    const { display } = document.getElementById('menu').style;
    if (display === 'block') {
      document.getElementById('menu').style.display = 'none';
    } else {
      document.getElementById('menu').style.display = 'block';
    }
    const { children } = document.getElementById('menuLink');
    [...children].forEach((child) => child.classList.toggle('activeIcon'));
  };

  const handleClickSearch = () => {
    document.getElementById('searchInput').classList.toggle('activeSearch');
  };

  const handleChange = (e) => {
    setTimeout(() => {
      dispatch(searchSlice.actions.setCurrent(e.target.value));
    }, 500);
  };

  return (
    <header>
      <div className="hamburgerIcon">
        {
        pathname !== '/'
          ? (
            <Link to={link} id="backLink">
              <MdArrowBackIosNew />
            </Link>
          )
          : (
            <button type="button" id="menuLink" onClick={handleClickMenu}>
              <GiHamburgerMenu className="activeIcon" />
              <MdClose />
            </button>
          )
        }
      </div>
      <div className="navTitle">
        {`🌎 ${title}`}
        {detail ? ` - ${detail}` : ''}
      </div>
      <div className="searchBar">
        {title === 'countries'
          ? (
            <>
              <button type="button" onClick={handleClickSearch}>
                <MdSearch />
              </button>
              <input name="search" id="searchInput" placeholder="search this region" onChange={handleChange} />
            </>
          )
          : ''}
      </div>
    </header>
  );
};

export default Navbar;
