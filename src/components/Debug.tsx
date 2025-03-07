
import React, { useEffect, useState } from 'react';

const Debug = () => {
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setError(`${event.message} at ${event.filename}:${event.lineno}`);
      console.error('Caught error:', event);
    };

    window.addEventListener('error', handleError);
    
    // Log some debug info
    console.log('Debug component mounted');
    console.log('Current base path:', import.meta.env.BASE_URL);
    console.log('Window location:', window.location.href);
    
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  if (error) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-red-100 p-4 text-red-800 z-50">
        <h2 className="text-lg font-bold">Error Detected:</h2>
        <pre className="mt-2 p-2 bg-white rounded">{error}</pre>
      </div>
    );
  }

  return null;
};

export default Debug;
