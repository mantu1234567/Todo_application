import React from 'react';

const ErrorHandle = ({ todoItems }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        height: '100vh', // Full viewport height to center vertically
        textAlign: 'center',
       
      }}
    >
      {todoItems.length === 0 ? <h4 style={{color:'red'}}>Todo Empty</h4> : null}
    </div>
  );
};

export default ErrorHandle;
