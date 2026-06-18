import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Screening from './pages/Screening';
import Report from './pages/Report';
import ParentDashboard from './pages/ParentDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="screening" element={<Screening />} />
          <Route path="report" element={<Report />} />
          <Route path="parent-dashboard" element={<ParentDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
