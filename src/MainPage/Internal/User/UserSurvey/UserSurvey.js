import React, {useEffect, useState} from "react";
import {dataHandler} from "../../../../Api/dataHandler";
import SimpleButton from "../../../../Buttons/SimpleButton";

const UserSurvey = ({survey}) => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const fetchData = async () => {

            const questionsDb = await dataHandler.getQuestionsForSurvey(survey.id);
            const initialAnswers = {};
            questionsDb.forEach(question => {
                initialAnswers[question.id] = "";
            });
            setAnswers(initialAnswers);
            setQuestions(questionsDb);

        };
        fetchData();
    }, [survey.id]);

    const handleInputChange = (e, questionId) => {
        const {value} = e.target;
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const answersList = Object.entries(answers).map(([questionId, answer]) => ({
            questionId,
            answer
        }));
        setIsSubmitted(true);
        await dataHandler.submitSurveyAnswers(answersList);

    };

    return (
        <div>
            <h1>{survey.name}</h1>
            {isSubmitted === false ? (
                <form onSubmit={handleSubmit}>
                    {questions.map(question => (
                        <div key={question.id}>
                            <p>{question.text}</p>
                            <input
                                type="text"
                                value={answers[question.id]}
                                onChange={(e) => handleInputChange(e, question.id)}
                            />
                        </div>
                    ))}
                    <SimpleButton>Submit</SimpleButton>
                </form>
            ) : (
                <h2>Submitted</h2>
            )}
        </div>
    );
};

export default UserSurvey;
