import React, {useState} from "react";
import './NewSubcategory.css'
import {dataHandler} from "../../../../../Api/dataHandler";
import SimpleButton from "../../../../../Buttons/SimpleButton";




const NewSubcategory = props => {

    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        data.categoryId = props.categoryId;
        await dataHandler.addNewSubcategory(data);
        setIsSent(true);
    }

    return (
        <div key={props.key} className="new-subcategory">
            <h1>Add new subcategory</h1>
            {isSent === false && (
                <div className="form-wrapper">
                    <form className="data-form" onSubmit={handleSubmit}>
                        <input name="name" type="text" placeholder="Subcategory's name"></input>
                        <SimpleButton>Submit</SimpleButton>
                    </form>
                </div>
            )}

            {isSent ? <h2>Submitted.</h2> : null}

        </div>
    )
}

export default NewSubcategory;