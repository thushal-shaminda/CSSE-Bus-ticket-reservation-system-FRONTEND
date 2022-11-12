import axios from "axios";
import { API_URL } from "./config";

const api = axios.create({
    baseURL: API_URL + "/bus",
});

export const NewBus = (bus) => api.post(`/add`, bus);
export const NewTimeTable = (timetable) => api.post(`/add`, timetable);
