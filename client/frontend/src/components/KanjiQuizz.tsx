// @ts-nocheck
import { useState, useEffect } from "react";
import axios from "axios";


function KanjiQuizz() {

    const [allKanjiByGrade, setAllKanjiByGrade] = useState([])
    const [randomKanjiByGrade, setSingleKanjiByGrade] = useState('')
    const [randomKanjiInformations, setRandomKanjiInformations] = useState([])
    const [meaning, setMeaning] = useState("");

    useEffect(() => {
        axios(`https://kanjiapi.dev/v1/kanji/grade-3`).then((response) => {
            setAllKanjiByGrade(response.data);
        })
    }, []);


    const generateRandomKanji = () => {
        let randomNumber = Math.floor(Math.random() * allKanjiByGrade.length);
        setSingleKanjiByGrade(allKanjiByGrade[randomNumber])

        getrandomInformationKanji(randomKanjiByGrade)
        setMeaning('')
        console.log('All kanji', allKanjiByGrade)
        console.log('Random kanji', randomKanjiByGrade)
    };

    const getrandomInformationKanji = async (randomKanjiByGrade) => {
        await axios(`https://kanjiapi.dev/v1/kanji/${randomKanjiByGrade}`).then((response) => {
            setRandomKanjiInformations(response.data);
            console.log(randomKanjiInformations)
        })
    };
    const handleChange = (e) => {
        setMeaning(e.target.value)
    }
    const handleClick = () => {
        console.log("meaning", meaning)
        if (randomKanjiInformations.meanings.includes(meaning)) {
            return alert('well done')
        }
        else { alert('NOOB') }
        setMeaning('')
    }


    return (
        <div>
            KanjiQuizz
            <button onClick={generateRandomKanji}>Click</button>
            <h1>{randomKanjiInformations.kanji}</h1>
            <form>
                <input
                    className="search-bar"
                    value={meaning}
                    type="text"
                    placeholder="What is the meaning of this kanji?"
                    onChange={(e) => handleChange(e)}
                />
                <button type="button" onClick={handleClick}>Click</button>
            </form>
            <p>{randomKanjiInformations.meanings ? randomKanjiInformations.meanings.map((x) => x) : "non"}</p>

        </div>
    )
};

export default KanjiQuizz