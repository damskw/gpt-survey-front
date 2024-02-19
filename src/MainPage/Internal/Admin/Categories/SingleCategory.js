import {useEffect, useState} from "react";
import {dataHandler} from "../../../../Api/dataHandler";
import ListedSubcategory from "./Subcategories/ListedSubcategory";
import SimpleButton from "../../../../Buttons/SimpleButton";
import NewSubcategory from "./Subcategories/NewSubcategory";


const SingleCategory = ({category}) => {

    const [subcategories, setSubcategories] = useState([]);
    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const subcategoriesDb = await dataHandler.getSubcategoriesForCategory(category.id);
            setSubcategories(subcategoriesDb)
        }
        fetchData();
    }, [category.id])


    return (
        <div className="single-category">
            {isAdding === false && (
                <div>
                    <div>
                        <h1>Subcategories for category {category.name}</h1>
                        <SimpleButton onClick={() => setIsAdding(true)}>Add new subcategory</SimpleButton>
                    </div>
                    {subcategories.map(s => (
                        <ListedSubcategory key={s.id} name={s.name}/>
                    ))}
                </div>
            )}

            {isAdding ? <NewSubcategory categoryId={category.id}/> : null}

        </div>
    )
}

export default SingleCategory;