import './SurveyAnalysis.css'
import React, {useEffect, useState} from "react";
import {dataHandler} from "../../../../Api/dataHandler";


const SurveyAnalysis = ({survey}) => {

    const [analysis, setAnalysis] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const analysisDb = await dataHandler.analyseSurvey(survey.id);
            setAnalysis(analysisDb);
        }
        fetchData();
    }, [survey.id])

    return (
        <div>
            <h1>Survey analysis for {survey.name}</h1>
            {analysis ? (
                <div>
                    <h2>Analysis Description</h2>
                    <p>{analysis.description}</p>
                </div>
            ) : (
                <p>Loading analysis...</p>
            )}
        </div>
    )
}

export default SurveyAnalysis;