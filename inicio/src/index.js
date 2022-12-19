import React from 'react';
import ReactDOM from 'react-dom/client';
import Cartao from './components/helloworld';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cartao nome="Marcus" idade="20" instagram="marcao.mesmo" twitter="marcaomesmott"/>
    <Cartao nome="Vini" idade="20" instagram="marcao.mesmo" twitter="vinimesmott"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
