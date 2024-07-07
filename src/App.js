import React from 'react';
import TimerBar from './TimerBar';

const App = () => {
  return (
    <div>
      <h1 style={{ fontSize: '31px', fontWeight: '400', fontFamily: 'GothamProBold, sans-serif', color: '#102f50' }}>
        Secure One Step Checkout
      </h1>
      <h2 style={{ fontSize: '24px', fontWeight: '400', fontFamily: 'GothamProMedium, sans-serif', color: '#2b8aeb' }}>
        Your Product Will Become Immediately Available After Purchase
      </h2>
      <TimerBar initialTime={91} backgroundColor="linear-gradient(to right, #FFA500, #FF4500)" text="LIMITED TIME OFFER" />
    </div>
  );
};

export default App;
