
type Props = {
    dataKanji: {
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
    }
};

const KanjiInformationsDisplay = ({ dataKanji }: Props) => {

    const meaning = dataKanji.meanings.join(', ')
    const kunYomi = dataKanji.kun_readings.join(', ')
    const onYomi = dataKanji.on_readings.join(', ')
    const jlptLvl = (dataKanji.jlpt === null ? "none" : dataKanji.jlpt)
    const gradeLvl = (dataKanji.grade === null ? "none" : dataKanji.grade)

    return (
        <>
            <div className="kanji-card">
                <div className="card-header">
                    <div className="kanji-information-title">
                        <h1>{dataKanji.kanji}</h1>
                    </div>
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