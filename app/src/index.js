import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Index from './components/Index';
import NotFound from './Components/NotFound';

//const el = document.getElementById('root');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="fourier-transformation" element={<App />} />
      <Route path="404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

// root.render(<App />);

// import styles
import './style.scss';
