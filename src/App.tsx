import { HaycProvider } from './hayc/config-context';
import { Preloader } from './components/Preloader';
import { ScrollToTop } from './components/ScrollToTop';
import { useState, useCallback } from 'react';
import { RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import router from './Router/Router';

const helmetContext = {};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const handlePreloaderComplete = useCallback(() => setIsLoading(false), []);

  return (
    <HaycProvider>
      <HelmetProvider context={helmetContext}>
        {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
        <div className={`min-h-screen bg-[#141414] ${isLoading ? 'overflow-hidden max-h-screen' : ''}`}>
          <RouterProvider router={router} />
        </div>
        <ScrollToTop />
      </HelmetProvider>
    </HaycProvider>
  );
}

export default App;
