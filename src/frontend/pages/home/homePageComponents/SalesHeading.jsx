import React from 'react';
import Timer from './Timer';

const SalesHeading = () => {
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 7); // Set the countdown for 7 days

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-red-500 text-white p-4 rounded-lg">
      <div className="text-center md:text-left">
        <h1 className="text-2xl font-bold">Mega Sales Deals</h1>
      </div>
      <div className=" text-xl mt-2 md:mt-0 text-center md:text-right">
        <Timer endDate={endDate} />
      </div>
    </div>
  );
};

export default SalesHeading;
