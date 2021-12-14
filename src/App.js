import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Components from './containers/Components';
import './sass/App.scss';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/components" element={<Components />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
