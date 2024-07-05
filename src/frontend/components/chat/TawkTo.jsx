import React, { useEffect } from 'react';

const TawkTo = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();

    // Initialize Tawk.to script
    (function () {
      var s1 = document.createElement("script"),
          s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/66865e8d9d7f358570d6f1fd/1i1ue2n69';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return <div className="chat">{null}</div>; // Placeholder div for chat widget
};

export default TawkTo;
