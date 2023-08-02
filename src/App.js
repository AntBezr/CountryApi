import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header.jsx';
import Landing from './pages/Landing';
import List from './pages/List';
import CountryPage from './pages/CountryPage';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/list' element={<List />} />
          <Route path='/list/:countryName' element={<CountryPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
