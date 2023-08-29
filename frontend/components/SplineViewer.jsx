import React, { useEffect } from 'react';

const SplineViewer = ({url}) => {
  useEffect(() => {
    // Create script element and set attributes
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@0.9.381/build/spline-viewer.js';

    // Append the script to the document
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return <spline-viewer url={url}></spline-viewer>;
};

export default SplineViewer;
