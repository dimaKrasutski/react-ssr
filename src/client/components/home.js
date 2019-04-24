import React from 'react';

export const Home = () => {
  return (
    <div>
      <div>I'm the home component</div>
      <button onClick={() => console.log('Hi there!')}>Press me!</button>
    </div>
  )
};
