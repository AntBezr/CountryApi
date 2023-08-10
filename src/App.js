import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './pages/Landing';
import List from './pages/List';
import CountryPage from './pages/CountryPage';
import About from './pages/About';

function App() {
  return (
    <div className="lightTheme">

      <BrowserRouter>
        <Header />
        <Routes >
          <Route path='/' element={<Landing />} />
          <Route path='/list' element={<List />} />
          <Route path='list/:countryName' element={<CountryPage />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
