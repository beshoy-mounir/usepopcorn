import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from "./App";
import Stars from './stars';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <div style={{ color: 'white' }}>
      {/* <App /> */}
      <Stars
        defalutRating={0}
        maxRating={5}
        color={'aqua'}
        className={'test'}
        messages={['Beshoy', 'Mounir', 'reda', 'soliman', 'saleb']}
      />
    </div>
  </StrictMode>
);
