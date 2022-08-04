import './styles/KanjiInformations.css'
import './styles/Quizz.css'
import './styles/Header.css'
import './styles/App.css'

import KanjiQuizz from './components/KanjiQuizz';
import SearchBar from "./components/SearchBar";
import Header from './components/Header';

const App = () => {

  return (
    <div className="App">
      <Header />
      <div className="search-quizz">
        <SearchBar />
        <KanjiQuizz />
      </div>
    </div>
  );

};
export default App;
