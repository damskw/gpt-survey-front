import './Surveys.css'
import {useEffect, useState} from "react";
import {dataHandler} from "../../../../Api/dataHandler";
import ListedSurvey from "./ListedSurvey";
import SingleSurvey from "./SingleSurvey";
import SurveyAnalysis from "./SurveyAnalysis";


const Surveys = () => {

    const [surveys, setSurveys] = useState([]);
    const [survey, setSurvey] = useState(null);
    const [selectedComponent, setSelectedComponent] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const surveysDb = await dataHandler.getAllSurveys();
            setSurveys(surveysDb)
        }
        fetchData();
    }, []);

    const handleViewClick = (survey) => {
        setSelectedComponent("View");
        setSurvey(survey);
    }

    const handleAnaliseClick = (survey) => {
        setSelectedComponent("Analise");
        setSurvey(survey);
    }




    return (
        <div>
            {selectedComponent === null && (
                <div>
                    <h1>All surveys</h1>
                    {surveys.map((survey, index) => (
                        <ListedSurvey key={index} survey={survey}
                                      onViewClick={() => handleViewClick(survey)}
                                      onAnaliseClick={() => handleAnaliseClick(survey)}/>
                    ))}
                </div>
            )}

            {selectedComponent === "View" && <SingleSurvey survey={survey}/>}
            {selectedComponent === "Analise" && <SurveyAnalysis survey={survey}/>}

        </div>
    )
}

export default Surveys;