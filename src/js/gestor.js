import { createProducts, summarySubTotal, summaryVat, summaryTotal } from "./createProducts.js";
import { saveProducts } from "./data.js";
import {closePopup, confirmInvoice, showInvoice} from "./invoice.js";

const divContainerProducts = document.querySelector('.detailProducts');
document.addEventListener('DOMContentLoaded', (e) => {
    
});

document.querySelector('#addProduct').addEventListener('click', (e) => {
    divContainerProducts.insertAdjacentHTML('beforeend', createProducts());
});

document.querySelector('#btnInvoice').addEventListener('click', () => {
    const invoiceModels = saveProducts(summarySubTotal, summaryVat, summaryTotal); 
    showInvoice(invoiceModels);
});