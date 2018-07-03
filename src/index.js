import React from 'react';
import { render } from 'react-dom';
import Index from './components/Index';

render(
  <Index />,
  document.getElementById('main')
);

if (module.hot) {
  module.hot.accept();
}
