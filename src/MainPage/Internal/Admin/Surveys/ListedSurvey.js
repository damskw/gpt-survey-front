import './ListedSurvey.css'
import SimpleButton from "../../../../Buttons/SimpleButton";
import React from "react";


const ListedSurvey = props => {


    return (
        <div className="listed-survey">
            <div className="listed-survey-info">
                Id: {props.survey.id} Name: {props.survey.name}
            </div>
            <div>
                <SimpleButton onClick={props.onViewClick}>View questions</SimpleButton>
                <SimpleButton onClick={props.onAnaliseClick}>Analise</SimpleButton>
            </div>
        </div>
    )
}

export default ListedSurvey;