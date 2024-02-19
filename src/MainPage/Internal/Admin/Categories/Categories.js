import React, { useEffect, useState } from "react";
import { dataHandler } from "../../../../Api/dataHandler";
import ListedCategory from "./ListedCategory";
import SingleCategory from "./SingleCategory";
import SimpleButton from "../../../../Buttons/SimpleButton";
import NewCategory from "./NewCategory";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(null);
    const [isAdding, setIsAdding] = useState(false);

    const handleClick = (category) => {
        setCategory(category);
    }

    const handleAddNewCategoryClick = () => {
        setIsAdding(true);
    }

    useEffect(() => {
        async function fetchData() {
            const categoriesDb = await dataHandler.getAllCategories();
            setCategories(categoriesDb);
        }
        fetchData();
    }, []);

    return (
        <div className="categories">
            {isAdding ? (
                <NewCategory/>
            ) : (
                category ? null : (
                    <div>
                        <h1>Categories</h1>
                        <SimpleButton onClick={handleAddNewCategoryClick}>Add new category</SimpleButton>
                        {categories.map((category, index) => (
                            <ListedCategory key={index} name={category.name} onClick={() => handleClick(category)} />
                        ))}
                    </div>
                )
            )}

            {category && !isAdding && <SingleCategory category={category} />}

        </div>
    )
}

export default Categories;
