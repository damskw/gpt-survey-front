import React, { useEffect, useState } from "react";
import './NewSurvey.css'
import { dataHandler } from "../../../../../Api/dataHandler";
import Listable from "../../../../../Others/Listable";
import SimpleButton from "../../../../../Buttons/SimpleButton";
import NewSurveyResults from './NewSurveyResults';

const NewSurvey = () => {
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [selectedSubcategories, setSelectedSubcategories] = useState([]);
    const [choosing, setChoosing] = useState("category");
    const [surveyName, setSurveyName] = useState("");
    const [loading, setLoading] = useState(false);
    const [surveyData, setSurveyData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const categoriesDb = await dataHandler.getAllCategories();
            setCategories(categoriesDb);
        };
        fetchData();
    }, []);

    const handleCategoryClick = async (category) => {
        setChoosing("subcategories");
        const subcategoriesDb = await dataHandler.getSubcategoriesForCategory(category.id);
        setSubcategories(subcategoriesDb);
    };

    const handleSubcategoryChange = (subcategory) => {
        setSelectedSubcategories(prevSubcategories => {
            const isSelected = prevSubcategories.some(item => item.id === subcategory.id);
            return isSelected
                ? prevSubcategories.filter(item => item.id !== subcategory.id)
                : [...prevSubcategories, subcategory];
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            name: surveyName,
            subcategories: selectedSubcategories
        };
        const response = await dataHandler.createNewSurvey(data);
        setSurveyData(response);
        setLoading(false);
    };

    return (
        <div className="new-category">
            <h1>Create new survey</h1>
            {loading && <p>Waiting for questions...</p>}
            {!loading && surveyData && <NewSurveyResults survey={surveyData} />}
            {!loading && !surveyData && (
                <div>
                    <h2>Choose {choosing}</h2>
                    {choosing === "category" && (
                        categories.map(category => (
                            <Listable key={category.id} name={category.name} onClick={() => handleCategoryClick(category)} />
                        ))
                    )}
                    {choosing === "subcategories" && (
                        <form className="new-category" onSubmit={handleSubmit}>
                            {subcategories.map(subcategory => (
                                <div key={subcategory.id}>
                                    <input
                                        type="checkbox"
                                        id={subcategory.id}
                                        name={subcategory.id}
                                        checked={selectedSubcategories.some(item => item.id === subcategory.id)}
                                        onChange={() => handleSubcategoryChange(subcategory)}
                                    />
                                    <label htmlFor={subcategory.id}>{subcategory.name}</label>
                                </div>
                            ))}
                            <input
                                name="name"
                                placeholder="Survey's name"
                                value={surveyName}
                                onChange={(e) => setSurveyName(e.target.value)}
                            />
                            <SimpleButton type="submit">Submit</SimpleButton>
                        </form>
                    )}
                </div>
            )}
        </div>
    );
};

export default NewSurvey;
