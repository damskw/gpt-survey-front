import React, {useEffect, useState} from 'react';
import {dataHandler} from "../../../Api/dataHandler";
import ListedUserSurvey from "./UserSurvey/ListedUserSurvey";
import UserSurvey from "./UserSurvey/UserSurvey";


const User = ( {children} ) => {

    const [surveys, setSurveys] = useState([]);
    const [survey, setSurvey] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const surveysDb = await dataHandler.getAllSurveys();
            setSurveys(surveysDb)
        }
        fetchData();
    }, []);

    const handleClick = (survey) => {
        setSurvey(survey);
    }


    return (
        <div>
            {survey === null ? (
                <div>
                    <h1>Available surveys</h1>
                    {surveys.map((survey, index) => (
                        <ListedUserSurvey key={index} survey={survey}
                                          onClick={() => handleClick(survey)}/>
                    ))}
                </div>
            ) : (
                <UserSurvey survey={survey}/>
            )}
        </div>
    )
}

export default User;