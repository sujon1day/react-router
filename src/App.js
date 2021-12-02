import React from 'react';
import {Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import CountryDetail from './components/CountryDetail/CountryDetail';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/country/:countryName" element={<CountryDetail />} />
      </Routes>
      </BrowserRouter>
  );
};

export default App;