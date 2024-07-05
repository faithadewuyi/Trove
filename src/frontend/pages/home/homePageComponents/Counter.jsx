import React, { useState } from 'react';


const Counter = ({ initialCount, title }) => {
    return (
      <div className="flex flex-col items-center justify-center bg-white p-6 shadow-lg rounded-lg w-80">
        <div className="flex items-center space-x-2">
          <span className="text-4xl text-zinc-700 font-bold">{initialCount}<span className="text-4xl font-bold text-btn">+</span></span>
        </div>
        <p className="mt-4 text-black text-lg font-bold">{title}</p>
      </div>
    );
  };
  
  export default Counter;
