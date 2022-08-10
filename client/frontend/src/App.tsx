import './styles/KanjiInformations.css'
import './styles/Quizz.css'
import './styles/Header.css'
import './styles/App.css'

import KanjiQuizz from './components/KanjiQuizz';
import SearchBar from "./components/SearchBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


const App = () => {

  return (
    <Router>
      <div className="App">
        <header className='header'>
          <Link to="/">Search</Link>
          <Link to="/quizz">Quizz</Link>
        </header>
        <div className="search-quizz">
          <Routes>
            <Route path="/" element={<SearchBar />} />
            <Route path="/quizz" element={<KanjiQuizz />} />
          </Routes>
        </div>
      </div>
    </Router>

  );

};
export default App;
