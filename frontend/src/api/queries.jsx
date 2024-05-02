import axios from 'axios';

const dbUrl = "http://localhost:8080"


export async function getKatalog(){

    try{
        const response = await axios.get(`${dbUrl}/load-katalog`);
        return response.data;
    } catch (error) {
        throw error;
    }
}