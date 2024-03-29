import axios from "axios";

const url = "http://localhost:5001/stories";

/* Traer historias */
export const fetchStories = () => axios.get(url);

export const createStory = (story) => axios.post(url, story);

export const updateStory = (id, story) => axios.patch(`${url}/${id}`, story);

export const deleteStory = (id) => axios.delete(`${url}/${id}`);
