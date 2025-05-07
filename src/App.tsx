import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Quiz from './pages/quiz';
import NotFound from './pages/not-found';
import FooterPage from './components/footerPage';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterPage />
    </Router>
  );
}

export default App;