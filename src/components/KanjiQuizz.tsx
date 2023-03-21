// @ts-nocheck
import { useState, useEffect } from "react";
import axios from "axios";


function KanjiQuizz() {

    const [allKanjiByGrade, setAllKanjiByGrade] = useState([])
    const [randomKanjiByGrade, setSingleKanjiByGrade] = useState('出')
    const [randomKanjiInformations, setRandomKanjiInformations] = useState([])
    const [meaning, setMeaning] = useState("");
    const [error, setError] = useState([])
    const [score, setScore] = useState(0)

    useEffect(() => {
        axios(`https://kanjiapi.dev/v1/kanji/grade-3`).then((response) => {
            setAllKanjiByGrade(response.data);
        })
    }, []);


    const generateRandomKanji = () => {
        let randomNumber = Math.floor(Math.random() * allKanjiByGrade.length);
        setSingleKanjiByGrade(allKanjiByGrade[randomNumber])
        getRandomInformationKanji(randomKanjiByGrade)
        setMeaning('')
    };

    const getRandomInformationKanji = async (randomKanjiByGrade) => {
        await axios(`https://kanjiapi.dev/v1/kanji/${randomKanjiByGrade}`).then((response) => {
            setRandomKanjiInformations(response.data);
        })
    };

    const handleChange = (e) => {
        setMeaning(e.target.value.toLowerCase())
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (randomKanjiInformations.meanings.includes(meaning)) {
            setError('Well done')
            setScore(score + 1)
            generateRandomKanji()
        }
        else if (meaning === "") {
            setError("Please write something")
        }
        else {
            setError('This is incorrect')
            setScore(score - 1)
        }
        setMeaning('')
    };

    return (
        <>
            <div className="quizz-main-div">
                <div className="quizz-title-score">
                    <h2>Test your knowledges</h2>
                    <div className="score" style={score >= 0 ? { backgroundColor: "green" } : { backgroundColor: "red" }}>{score}</div>
                </div>
                <p style={error === 'Well done' ? { backgroundColor: "green" } : { backgroundColor: "red" }}>{error}</p>
                <div className="quizz-kanji">
                    <h1>{randomKanjiInformations.kanji}</h1>
                </div>
                <div className="quizz-form">
                </div>
                <button className="button-validate" onClick={generateRandomKanji}>Generate a kanji</button>
                <form onSubmit={handleSubmit}>
                    <input
                        className="quizz-search-bar"
                        value={meaning}
                        type="text"
                        placeholder="What is this kanji?"
                        onChange={(e) => handleChange(e)}
                    />
                </form>
                <button className="button-validate" type="submit" onClick={handleSubmit}>Answer</button>

            </div>
        </>
    )
};

export default KanjiQuizz