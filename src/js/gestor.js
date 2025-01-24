import { createProducts } from "./createProducts.js";

const divContainerProducts = document.querySelector('.detailProducts');
document.addEventListener('DOMContentLoaded', (e) => {
    
});

document.querySelector('#addProduct').addEventListener('click', (e) => {
    divContainerProducts.insertAdjacentHTML('beforeend', createProducts());
});