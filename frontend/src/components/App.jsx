import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import routes from '../routes';

import UiKit from './UiKit';
import Cards from './Cards';
import ColorsAndTypes from './ColorsAndTypes';
import FormElements from './FormElements';
import HeadersAndFooters from './HeadersAndFooters';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<UiKit />} />
      <Route path={routes.cards()} element={<Cards />} />
      <Route path={routes.colorsAndTypes()} element={<ColorsAndTypes />} />
      <Route path={routes.formElements()} element={<FormElements />} />
      <Route path={routes.headersAndFooters()} element={<HeadersAndFooters />} />
      <Route path={routes.uiKit()} element={<UiKit />} />
      <Route path="" element={<ColorsAndTypes />} />
    </Routes>
  </BrowserRouter>
);

export default App;
