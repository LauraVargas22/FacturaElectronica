import { divProducts } from "./divProducts.js";

const divContainerProducts = document.querySelector('.detailProducts');
document.addEventListener('DOMContentLoaded', (e) => {
    
});

document.querySelector('#addProduct').addEventListener('click', (e) => {
    divContainerProducts.insertAdjacentHTML('beforeend', divProducts());
});

divContainerProducts.addEventListener("click", (e)=>{
    if(e.target.id == "removeProduct"){
        eliminarItemLista(e.target.dataset.id);
    }
})
const eliminarItemLista = (Idx) =>{
    let products = document.querySelector(`#NumProducts${Idx}`);
    products.remove();
}