import COUNTRIES from '../staticData/countries';
import RESULTS from '../staticData/searchResults';

export function getCountries() {
  return new Promise((resolve,reject) =>{
    setTimeout(() => {
      resolve(COUNTRIES);
    },2000)
  }) 
};

export function getResults() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(RESULTS);
    },2000);
  })
}