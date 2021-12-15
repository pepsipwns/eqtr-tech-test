import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Components from './containers/Components';
import Home from './containers/Home';
import './sass/App.scss';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/components" element={<Components />}></Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
