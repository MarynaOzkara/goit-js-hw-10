import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';
import './css/style.css';
export let breedId; 

// const BASE_URL = 'https://api.thecatapi.com/v1';
// const KEY = 'live_Hx8ktcm4HlPDrS1GRWIi3bNhI3TJEE42Jh3p70JuRDlHt9ZNF2P1iv3LNdA1a34e';

const selectBreeds = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loaderMassege = document.querySelector('.loader');
const errorWarning = document.querySelector('.error');

let storedBreeds = [];

selectBreeds.classList.add('is-hidden');
errorWarning.classList.add('is-hidden');
loaderMassege.classList.add('is-hidden');


    fetchBreeds()
    .then((data) => {
        selectBreeds.classList.remove('is-hidden'); 
            
        //filter to only include those with an `image` object
        data = data.filter(img=> img.image?.url!=null)
            
        storedBreeds = data;
    
        for (let i = 0; i < storedBreeds.length; i++) {
        const breed = storedBreeds[i];
        let option = document.createElement('option');
        
        //skip any breeds that don't have an image
        if(!breed.image)continue
        
        //use the current array index
        option.value = i;
        option.innerHTML = `${breed.name}`;
        option.id = `${breed.id}`;
        selectBreeds.appendChild(option);
        // let breedId = breed.id;
        
        // console.log(breedId);
        }
        //show the first breed by default
        // showBreedImage(0)
       
        })
        .catch((err) =>
        console.log(err), 
        selectBreeds.classList.add('is-hiddden'),
    )

    selectBreeds.addEventListener('click', onClick);
    function onClick() {
        
     let breedId = null;
        for (let option of selectBreeds.options)
        {
            if (option.selected) {
                breedId = option.id;
                
            }
        }
        console.log(breedId);   
        fetchCatByBreed();  
    }
    
// function createMarkup(arr) {
//     return arr.map((name) => `<p>${name}</p>`).join('');
    
// }

    // fetchCatByBreed()
    // .then((data) => 
    // console.log(data)
    // )
    // .catch((err) =>
    // console.log(err)
    // )

    

        // function showBreedImage(i)
        // {
        //     let catImage = document.createElement('img'); 
        //     catImage.src= storedBreeds[i].image.url;
          
        //   catInfo.textContent= storedBreeds[i].temperament
          
        // }    
    
  