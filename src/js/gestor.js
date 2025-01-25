//Archivo que se encarga de enviar todos los modulos a main.js
//Importaciones de los modulos
import { createProducts, summarySubTotal, summaryVat, summaryTotal } from "./createProducts.js";
import { saveProducts } from "./data.js";
import {closePopup, confirmInvoice, showInvoice} from "./invoice.js";

//Selecciona el contenedor donde se ingresan los datos de los prodcutos
const divContainerProducts = document.querySelector('.detailProducts');
document.addEventListener('DOMContentLoaded', (e) => {
    
});

//Evento para agregar un nuevo formulario para otro producto en el contenedor
document.querySelector('#addProduct').addEventListener('click', (e) => {
    divContainerProducts.insertAdjacentHTML('beforeend', createProducts());
});

//Evento para pagar, en este se visualiza en consola el objeto literal y se activa el Pop Up
document.querySelector('#btnInvoice').addEventListener('click', () => {
    const invoiceModels = saveProducts(summarySubTotal, summaryVat, summaryTotal); //Objeto Literal
    showInvoice(invoiceModels); //PopUp
});