import React from "react";
import './ListedSubcategory.css'




const ListedSubcategory = props => {


    return (
        <div className="listed-subcategory">
            {props.name}
        </div>
    )
}

export default ListedSubcategory;