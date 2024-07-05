import React from 'react';
import Counter from './Counter';

const CounterSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-10 space-y-4 md:space-y-0 md:space-x-4 p-4">
      <Counter initialCount={1500} title="Orders Made"/>
      <Counter initialCount={1000} title="Returning Customers"/>
      <Counter initialCount={500} title="Registered Vendors" />
    </div>
  );
};

export default CounterSection;
