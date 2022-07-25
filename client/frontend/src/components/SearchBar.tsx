import axios from "axios";
import { useState } from 'react';
import KanjiInformationsDisplay from "./KanjiInformationsDisplay";


type KanjiInformations = {

    kanji: string;
    grade: number;
    stroke_count: number;
    meanings: string[];
    kun_readings: string[];
    on_readings: string[];
    name_readings: string[];
    jlpt: number;
    unicode: string;
    heisig_en: string;

};

const SearchBar = () => {

    const [dataKanji, setDataKanji] = useState<KanjiInformations>({

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

    const getKanji = async (kanji: string) => {
        await axios(`https://kanjiapi.dev/v1/kanji/${kanji}`).then((response) => {
            setDataKanji(response.data);
            console.log(dataKanji)
        })
    };
    const [kanji, setKanji] = useState("");
    const handleChange = (e: any) => {
        setKanji(e.target.value)
    }
    const handleClick = () => {
        getKanji(kanji)
    }

    return (
        <div className="App">
            <form onSubmit={handleClick}>
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search your kanji"
                    onChange={(e) => handleChange(e)}
                />
            </form>
            <button type="button" onClick={handleClick}>click</button>
            <div>
                <KanjiInformationsDisplay dataKanji={dataKanji} />
            </div>
        </div>
    );
}

export default SearchBar;
