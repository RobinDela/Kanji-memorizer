import './App.css'
import KanjiQuizz from './components/KanjiQuizz';
import SearchBar from "./components/SearchBar";

const App = () => {

  return (
    <div className="App">
      <SearchBar />
      <KanjiQuizz />
    </div>
  );

};
export default App;
