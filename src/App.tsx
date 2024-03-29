import './styles/KanjiInformations.css'
import './styles/Quizz.css'
import './styles/Header.css'
import './styles/App.css'
import './styles/SearchBar.css'

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
    <>
      <Router>
        <div className="App">
          <header className='header'>
            <div className="link-header">
              <Link to="/">Study</Link>
            </div>
            <div className="link-header">
              <Link to="/quizz">Quizz</Link>
            </div>
          </header>
          <div className="search-quizz">
            <Routes>
              <Route path="/" element={<SearchBar />} />
              <Route path="/quizz" element={<KanjiQuizz />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>

  );

};
export default App;
