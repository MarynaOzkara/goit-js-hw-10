import axios from "axios";

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common["x-api-key"] = "live_Hx8ktcm4HlPDrS1GRWIi3bNhI3TJEE42Jh3p70JuRDlHt9ZNF2P1iv3LNdA1a34e";

const instance = axios.create({
    baseURL: 'https://api.thecatapi.com/v1',
    headers: {'x-api-key': 'live_Hx8ktcm4HlPDrS1GRWIi3bNhI3TJEE42Jh3p70JuRDlHt9ZNF2P1iv3LNdA1a34e'}
});

console.log(instance.get('/breeds'));

fetch((instance.get('/breeds'))).then((response) => {
    if(!response.ok) {
                throw new Error(response.status);
            }
            return response.json(); 
}).then((data) => {
    console.log(data);
})
// export const fetchBreeds = () =>
//  fetch(instance.get('/breeds'))
//  .then((response) => {
//     if(!response.ok) {
//         throw new Error(response.status);
//     }
//     return response.json();     
// }).then((data) => {
//     console.log(data);
// })

// const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
// const KEY = 'live_Hx8ktcm4HlPDrS1GRWIi3bNhI3TJEE42Jh3p70JuRDlHt9ZNF2P1iv3LNdA1a34e';

// export const fetchBreeds = () =>
// fetch(BASE_URL, {headers: {
//     'x-api-key': KEY
// }}).then((response) => {
//     if(!response.ok) {
//         throw new Error(response.status);
//     }
//     return response.json();     
// })

