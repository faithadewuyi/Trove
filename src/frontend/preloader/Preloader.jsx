// src/Preloader.js
import  { useEffect, useState } from 'react';
import './Preloader.css';
import Logo from './preloaderImage/logo.png'
{/* <img src={Logo} alt="Company Logo" className="w-24 h-24" /> */}

const Preloader = ({ setLoading }) => {
    const [progress, setProgress] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            clearInterval(interval);
            setTimeout(() => {
              setLoading(false);
            }, 500); // wait for 500ms before clearing the preloader
            return oldProgress;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 300);
    }, [setLoading]);
  
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="animate-bounce">
          {/* <img src="logo.png" alt="Company Logo" className="w-24 h-24" /> */}
          <img src={Logo} alt="Company Logo" className="w-80 h-80" />
        </div>
        <div className="w-full max-w-sm mt-8 bg-gray-200 rounded-full">
          <div
            className="bg-btn text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: `${progress}%` }}
          >
            {progress.toFixed(0)}%
          </div>
        </div>
      </div>
    );
  };
  
  export default Preloader;
