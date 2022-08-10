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

        kanji: "字",
        grade: 1,
        stroke_count: 6,
        meanings: ["character", "letter", "word", "section of village"],
        kun_readings: ['あざ', 'あざな', '-な'],
        on_readings: ['ジ'],
        name_readings: [],
        jlpt: 3,
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
    const handleSubmit = (e: any) => {
        e.preventDefault()
        getKanji(kanji)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search your kanji"
                    onChange={(e) => handleChange(e)}
                />
            </form>
            <button className="button-validate" type="submit" onClick={handleSubmit}>click</button>
            <div>
                <KanjiInformationsDisplay dataKanji={dataKanji} />
            </div>
        </div>
    );
}

export default SearchBar;
