import React from 'react';

const Marquee = ({ text }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap ">
      <div className="animate-marquee inline-block wrapper">
        <h3 className="marquee ">{text}</h3> 
      </div>
    </div>
  );
};

export default Marquee;
