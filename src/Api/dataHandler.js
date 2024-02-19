import api from './apis.json'

export let dataHandler = {
    getAllSurveys: async function () {
        return await apiGet(api.apiUrl + api.getAllSurveys);
    },
    getAllCategories: async function () {
        return await apiGet(api.apiUrl + api.getAllCategories);
    },
    getSubcategoriesForCategory: async function (categoryId) {
        return await apiGet(api.apiUrl + api.getSubcategoriesForCategory.replace("$categoryId", categoryId));
    },
    addNewSubcategory: async function (payload) {
        return await apiPost(api.apiUrl + api.addNewSubcategory, payload);
    },
    addNewCategory: async function (payload) {
        return await apiPost(api.apiUrl + api.addNewCategory, payload);
    },
    getQuestionsForSurvey: async function (surveyId) {
        return await apiGet(api.apiUrl + api.getQuestionsForSurvey.replace("$surveyId", surveyId));
    },
    analyseSurvey: async function (surveyId) {
        return await apiGet(api.apiUrl + api.analyseSurvey.replace("$id", surveyId));
    },
    createNewSurvey: async function (payload) {
        return await apiPost(api.apiUrl + api.createNewSurvey, payload);
    },
    submitSurveyAnswers: async function (payload) {
        return await apiPost(api.apiUrl + api.submitSurveyAnswers, payload);
    }
}


async function apiGet(url) {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error(`Failed to fetch data from ${url}. Status: ${response.status} ${response.statusText}`);
    }
}

async function apiPost(url, payload) {
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    });
    if (response.ok) {
        return await response.json();
    }
}