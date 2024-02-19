import React from "react";
import './ListedQuestion.css'




const ListedQuestion = ({question}) => {


    return (
        <div>
            {question.text}
        </div>
    )
}

export default ListedQuestion;