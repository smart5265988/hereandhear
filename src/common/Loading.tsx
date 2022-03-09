import React from 'react';

function Loading() {
  return (
    <div
      className="loading_wrap visible"
      id="loading"
      style={{
        display: 'flex',
        zIndex: '900',
        width: '100%',
        height: '100vh',
        background: '#000',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: '0',
      }}
    >
      <div className="loading"></div>
    </div>
  );
}

export default Loading;
