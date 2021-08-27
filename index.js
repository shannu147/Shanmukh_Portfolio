import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import GlobalStyles from './src/styles/GlobalStyle';
import Typography from './src/styles/Typography';

ReactDOM.render(
  <>
    <GlobalStyles />
    <Typography />
    <App />
  </>,
  document.getElementById('root')
);
