import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Legal from './components/Legal';
import NotFound from './components/NotFound';
import About from './components/About'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="fourier-transformation" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="legal-notice" element={<Legal />} />
      <Route path="404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

// import styles
import './style.scss';
