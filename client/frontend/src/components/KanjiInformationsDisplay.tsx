// @ts-ignore

const KanjiInformationsDisplay = ({ dataKanji }: props) => {

    const meaning = dataKanji.meanings.join(', ')
    const kunYomi = dataKanji.kun_readings.join(', ')
    const onYomi = dataKanji.on_readings.join(', ')
    const jlptLvl = (dataKanji.jlpt === null ? "none" : dataKanji.jlpt)
    const gradeLvl = (dataKanji.grade === null ? "none" : dataKanji.grade)

    return (
        <>
            <div className="kanji-card">
                <div className="card-header">
                    <h1>{dataKanji.kanji}</h1>
                    <div>
                        <div>Kun: {kunYomi}</div>
                        <div>On: {onYomi}</div>
                    </div>
                </div>
                <div className="card-body">
                    <div>{meaning}</div>
                    <div className="jlpt">Jlpt: {jlptLvl}</div>
                    <div className="grade">Grade: {gradeLvl}</div>
                    <div>Stroke count: {dataKanji.stroke_count}</div>
                </div>

            </div>
        </>
    )
}

export default KanjiInformationsDisplay