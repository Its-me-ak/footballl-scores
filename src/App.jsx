import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import FixturesPage from './pages/FixturesPage';
// import TeamsPage from './pages/TeamsPage';
// import StandingsPage from './pages/StandingsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="text-5xl text-center uppercase underline">Hello World</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/fixtures" element={<FixturesPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/standings" element={<StandingsPage />} /> */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
