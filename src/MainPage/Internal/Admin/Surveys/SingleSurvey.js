import './Surveys.css'
import {useEffect, useState} from "react";
import {dataHandler} from "../../../../Api/dataHandler";
import ListedQuestion from "./Questions/ListedQuestion";


const SingleSurvey = ({survey}) => {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const questionsDb = await dataHandler.getQuestionsForSurvey(survey.id);
            setQuestions(questionsDb);
        }
        fetchData();
    }, [survey.id])


    return (
        <div>
            <h1>Questions for {survey.name}</h1>
            {questions.map(q => (
                <ListedQuestion question={q}/>
            ))}
        </div>
    )
}

export default SingleSurvey;