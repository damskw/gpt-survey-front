import {useEffect} from "react";


const NewSurveyResults = ({survey}) => {

    useEffect(() => {
        console.log(survey)
    })

    return (
        <div>
            <h2>Generated questions for survey {survey.name}</h2>
            {survey.questions.map((q, index) => (
                <p key={index}>{index + 1} {q.text}</p>
            ))}
        </div>
    )
}

export default NewSurveyResults;