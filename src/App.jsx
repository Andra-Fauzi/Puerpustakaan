import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './pages/navigation';
import Home from './pages/home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
