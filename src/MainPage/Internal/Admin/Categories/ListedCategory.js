import SimpleButton from "../../../../Buttons/SimpleButton";
import React from "react";
import './ListedCategory.css'




const ListedCategory = props => {


    return (
        <div className="listed-category">
            <div className="listed-category-info">
                {props.name}
            </div>
            <div>
                <SimpleButton onClick={props.onClick}>View subcategories</SimpleButton>
            </div>
        </div>
    )
}

export default ListedCategory;