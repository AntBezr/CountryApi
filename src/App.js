import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './pages/Landing';
import List from './pages/List';
import CountryPage from './pages/CountryPage';
import About from './pages/About';
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('darkTheme')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'lightTheme' ? 'darkTheme' : 'lightTheme'))
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>

        <BrowserRouter>
          <Header />
          <Routes >
            <Route path='/' element={<Landing />} />
            <Route path='/list' element={<List />} />
            <Route path='list/:code' element={<CountryPage />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
