// @ts-nocheck
// import { KanjiInformations } from './Types/KanjiApiData';
import axios from "axios";
import { useEffect, useState } from 'react';


const App = () => {

  const [dataKanji, setDataKanji] = useState({

    kanji: "",
    grade: 0,
    stroke_count: 0,
    meanings: [],
    kun_readings: [],
    on_readings: [],
    name_readings: [],
    jlpt: 0,
    unicode: "",
    heisig_en: ""
  });

  const getKanji = async (x) => {
    await axios(`https://kanjiapi.dev/v1/kanji/${x}`).then((response) => {
      setDataKanji(response.data);
      console.log(dataKanji)
    })
  };

  const [kanji, setKanji] = useState("");
  const handleChange = (e) => {
    setKanji(e.target.value)
  }
  const handleClick = () => {
    getKanji(kanji)
  }


  useEffect(() => {
    getKanji();
  }, [])

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search your kanji"
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleClick}>click</button>
      {dataKanji.kanji}
    </div>
  );
}

export default App;
