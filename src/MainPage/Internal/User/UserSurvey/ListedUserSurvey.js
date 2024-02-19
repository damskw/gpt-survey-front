import SimpleButton from "../../../../Buttons/SimpleButton";
import React from "react";


const ListedUserSurvey = props => {


    return (
        <div className="listed-survey">
            <div className="listed-survey-info">
                Name: {props.survey.name}
            </div>
            <div>
                <SimpleButton onClick={props.onClick}>Take a survey</SimpleButton>
            </div>
        </div>
    )
}

export default ListedUserSurvey;