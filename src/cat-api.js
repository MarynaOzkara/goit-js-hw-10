import { breedId } from './index';
const BASE_URL = 'https://api.thecatapi.com/v1';
const KEY = 'live_Hx8ktcm4HlPDrS1GRWIi3bNhI3TJEE42Jh3p70JuRDlHt9ZNF2P1iv3LNdA1a34e';

export const fetchBreeds = () =>
fetch(`${BASE_URL}/breeds?api_key=${KEY}`)
.then((response) => {
    if(!response.ok) {
        throw new Error(response.status);
    }
    return response.json();     
})


export const fetchCatByBreed = () => 
fetch(`${BASE_URL}/images/search?breed_id=${breedId}&api_key=${KEY}`)
.then((response) => {
    if(!response.ok) {
        throw new Error(response.status);
    }
    return response.blob(); 
}).then((data) => {
    console.log(data);
})