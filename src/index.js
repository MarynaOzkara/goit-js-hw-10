import { fetchBreeds } from './cat-api';
import './css/style.css';

const selectBreeds = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loaderMassege = document.querySelector('.loader');
const errorWarning = document.querySelector('.error');

selectBreeds.classList.add('is-hidden');
errorWarning.classList.add('is-hidden');
loaderMassege.classList.add('is-hidden');

// selectBreeds.addEventListener('click',(e) => {
    
//     const select = e.target;
//     console.dir(select);

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
        selectBreeds.appendChild(option);
        
        }
        //show the first breed by default
        // showBreedImage(0)
        })
        .catch((err) =>
        console.log(err), 
        selectBreeds.classList.add('is-hiddden'),
    )
// })

// function createMarkup(arr) {
//     return arr.map((name) => `<p>${name}</p>`).join('');
    
// }

