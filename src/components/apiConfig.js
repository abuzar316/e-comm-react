import axios ,{Axios} from 'axios';

export const apiConfig=axios.create({
    baseURL:"https://fakestoreapi.com/",
})