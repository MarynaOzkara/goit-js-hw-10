import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import Notiflix from 'notiflix';

const selectBreeds = document.querySelector('.breed-select');
const catInfoDiv = document.querySelector('.cat-info');
const loaderMassege = document.querySelector('.loader');
const errorWarning = document.querySelector('.error');


errorWarning.classList.add('is-hidden');
loaderMassege.classList.add('is-hidden');

// Запит за колекцією порід при завантаженні сторінки
window.addEventListener('DOMContentLoaded', () => {
  showLoader();
  fetchBreeds()
    .then(breeds => {
      fillBreedsSelect(breeds);
      hideLoader();
    })
    .catch(error => {
      console.error('Error fetching breeds:', error);
      showError();
    });    
});

// Заповнення селекту порід опціями
function fillBreedsSelect(breeds) {
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    selectBreeds.appendChild(option);
  });
}

// Обробник події при зміні вибраної породи
selectBreeds.addEventListener('change', () => {
  showLoader();
  const selectedBreedId = selectBreeds.value;
  fetchCatByBreed(selectedBreedId)
    .then(catData => {
      showCatInfo(catData);
      hideLoader();
    })
    .catch(error => {
      console.error('Error fetching cat by breed:', error);
     showError();
     hideCatInfo();
    });
});

// Відображення інформації про кота
function showCatInfo(catData) {
  if (!catData) {
    showError();
    return;
  }

  const { breeds, url } = catData;

  const catInfoHTML = `
    <div class="img-wrap">
      <img src="${url}" alt="${breeds[0].name}">
    </div>
    <div class="info-wrap">
      <h3>${breeds[0].name}</h3>
      <p class="description"><strong>Description:</strong> ${breeds[0].description}</p>
      <p class="breeds-temperament"><strong>Temperament:</strong> ${breeds[0].temperament}</p>
    </div>
  `;

  catInfoDiv.innerHTML = catInfoHTML;
}

// Показати завантажувач
function showLoader() {
  // loaderMassege.classList.remove('is-hidden');
  Notiflix.Notify.info('Loading data, please wait...');
}

// Приховати завантажувач
function hideLoader() {
  loaderMassege.classList.add('is-hidden');
}

// Показати повідомлення про помилку
function showError() {
  // errorWarning.classList.remove('is-hidden');
  Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
}

// Приховати інформацію  про котика
function hideCatInfo() {
  catInfoDiv.innerHTML = '';
}

    
  
    
