import { KanjiInformations } from './types/KanjiApiData';
import axios from "axios";
import { useEffect, useState } from 'react';


const App = () => {

  const [data, setData] = useState<KanjiInformations[]>([])

  useEffect(() => {
    axios.get<KanjiInformations[]>('https://kanjiapi.dev/v1/kanji/風')
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        console.log("state", data);

      });
  }, []);
  return (
    <div className="App">
    </div>
  );
}

export default App;
