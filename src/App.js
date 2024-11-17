import Header from './views/components/Header';
import ChooseModel from './views/ChooseModel';
import ViewOneModel from './views/ViewOneModel';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/Ccm" element={<ChooseModel />} />
          <Route  path="/" element={<ChooseModel />} />
          <Route path="/visualisation" element={<ViewOneModel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
