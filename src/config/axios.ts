import axios from "axios";
export const instace = axios.create({
    baseURL :" http://localhost:3000",
})