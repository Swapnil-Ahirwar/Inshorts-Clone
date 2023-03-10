import axios from 'axios';

export const getNews = async(page, size=5) => {

    const URL = 'http://localhost:8000';
    try{
        return await axios.get(`${URL}/news?page=${page}&size=${size}`);
    }catch(error){
        console.log('error while calling getNews api', error);
    }
}