import { Navbar } from './components/Navbar';
import { InfoModal } from './components/modals/InfoModal';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import { LoginPage } from './components/LoginPage';
import { GamePage } from './components/GamePage';


function App() {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [userName, setUserName] = useState(localStorage.getItem('userName'));
  //set dark mode as prefer from localstorage
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme')
      ? localStorage.getItem('theme') === 'dark'
      : prefersDarkMode
  );
  const [childKey, setChildKey] = useState(0);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleDarkMode = (isDark: boolean) => {
    setIsDarkMode(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  const logout = () => {
    localStorage.removeItem('userName');
    setUserName(null);
  };

  function handleLogin(name: string) {
    localStorage.setItem('userName', name);
    setUserName(name);
  }

  return (
    <BrowserRouter>

      <div className='flex h-full flex-col'>
        <Navbar
          setIsInfoModalOpen={setIsInfoModalOpen}
          setIsLoginModalOpen={setIsLoginModalOpen}
          logout={logout}
          userName={userName}
          isDarkMode={isDarkMode}
          handleDarkMode={handleDarkMode}
        />
        <Routes>
          <Route path='/' element={<HomePage userName={userName} />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/game' element={<GamePage />} />
        </Routes> <InfoModal
        isOpen={isInfoModalOpen}
        handleClose={() => setIsInfoModalOpen(false)}
      />
      </div>
    </BrowserRouter>
  );
}

export default App;
