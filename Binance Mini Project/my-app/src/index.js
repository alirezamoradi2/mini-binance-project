import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Header from './Header';
import Nav from './Nav';
import DivOrder from './DivOrder';
import Chart from './Chart';
import Market from './Market';
import Spot from './Spot';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <Header />
      <Nav />
      <DivOrder />
      <Market />
      <Chart />
      <Spot />
      <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();