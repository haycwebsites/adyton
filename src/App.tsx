import { HaycProvider } from './hayc/config-context';
import { Preloader } from './components/Preloader';
import { useState, useCallback, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import router from './Router/Router';

const helmetContext = {};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handlePreloaderComplete = useCallback(() => setIsLoading(false), []);

  // Force light mode - client prefers white background always
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('darkMode', 'false');
  }, []);

  return (
    <HaycProvider>
      <HelmetProvider context={helmetContext}>
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
        <div className={`min-h-screen bg-white ${isLoading ? 'overflow-hidden max-h-screen' : ''}`}>
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </HaycProvider>
  );
}

export default App;
