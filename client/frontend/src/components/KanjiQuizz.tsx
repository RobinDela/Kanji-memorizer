// @ts-ignore
import { useState, useEffect } from "react";
import axios from "axios";
function KanjiQuizz() {

    const [allKanjiByGrade, setAllKanjiByGrade] = useState([])
    const [randomKanjiByGrade, setSingleKanjiByGrade] = useState('')

    useEffect(() => {
        axios(`https://kanjiapi.dev/v1/kanji/grade-3`).then((response) => {
            setAllKanjiByGrade(response.data);
            console.log(allKanjiByGrade)
        })
    }, []);





    const generateRandomKanji = () => {
        let randomNumber = Math.floor(Math.random() * allKanjiByGrade.length);
        setSingleKanjiByGrade(allKanjiByGrade[randomNumber])
        console.log('All kanji', allKanjiByGrade)
        console.log('Random kanji', randomKanjiByGrade)
    };

    return (
        <div>KanjiQuizz
            <button onClick={generateRandomKanji}>Click</button>
            <p>{randomKanjiByGrade}</p>
        </div>
    )
}

export default KanjiQuizz