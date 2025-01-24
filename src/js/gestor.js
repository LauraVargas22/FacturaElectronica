import { createProducts } from "./createProducts.js";

const divContainerProducts = document.querySelector('.detailProducts');
document.addEventListener('DOMContentLoaded', (e) => {
    
});

document.querySelector('#addProduct').addEventListener('click', (e) => {
    divContainerProducts.insertAdjacentHTML('beforeend', createProducts());
});

let productForm = document.querySelector("#dataProducts");

productForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(productForm));
    postData(data).then(r => {
        console.log(r)
    });
})

const postData = async (data) => {
    return JSON.stringify(data);
}