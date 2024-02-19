import React, {useState} from 'react';
import SimpleButton from "../../../Buttons/SimpleButton";
import Categories from "./Categories/Categories";
import Surveys from "./Surveys/Surveys";
import NewSurvey from "./Surveys/NewSurvey/NewSurvey";


const Admin = () => {

    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleClick = (component) => {
        setSelectedComponent(component);
    }

    return (
        <div className="admin">
            {selectedComponent === null && (
                <div className="internal-buttons">
                    <SimpleButton onClick={() => handleClick('Categories')}>View categories</SimpleButton>
                    <SimpleButton onClick={() => handleClick('CreateSurvey')}>Create survey</SimpleButton>
                    <SimpleButton onClick={() => handleClick('ViewSurveys')}>View surveys</SimpleButton>
                </div>
            )}

            {selectedComponent === 'Categories' && <Categories />}
            {selectedComponent === 'ViewSurveys' && <Surveys />}
            {selectedComponent === 'CreateSurvey' && <NewSurvey />}
        </div>
    )
}

export default Admin;