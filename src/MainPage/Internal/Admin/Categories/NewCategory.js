import React, {useState} from "react";
import './NewCategory.css'
import {dataHandler} from "../../../../Api/dataHandler";
import SimpleButton from "../../../../Buttons/SimpleButton";




const NewCategory = () => {

    const [isSent, setIsSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());
        const res = await dataHandler.addNewCategory(data);
        console.log(res);
        setIsSent(true);
    }

    return (
        <div className="new-category">
            <h1>Add new category</h1>
            {isSent === false && (
                <div className="form-wrapper">
                    <form className="data-form" onSubmit={handleSubmit}>
                        <input name="name" type="text" placeholder="Category's name"></input>
                        <SimpleButton>Submit</SimpleButton>
                    </form>
                </div>
            )}

            {isSent ? <h2>Submitted.</h2> : null}

        </div>
    )
}

export default NewCategory;