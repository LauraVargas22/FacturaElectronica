import { saveProducts } from "./data.js";
//Importación libreria sweetalert2
import Swal from 'sweetalert2';

/**
 * Función para mostrar el PopUp
 * @param {Object} invoiceModels 
 */
export const showInvoice = (invoiceModels) => {
    //Selecciona el contenedor del popup
    const popup = document.getElementById("popup");
    //Estilo del popup al producirse el evento
    popup.style.display = "block";

    //Desestructuración de los datos
    //Datos Usuario
    const {numInvoice: {personalData: {numID, names, surname}} } = invoiceModels;
    //Productos
    const { numInvoice: { products } } = invoiceModels;
    //Valores Generales
    const {numInvoice: {summary: {subTotal, vat, total}} } = invoiceModels;
    
    //Agrega información al popup de acuerdo a la desestructuración
    document.getElementById('popUpName').textContent = `Sr@ ${names} ${surname}`;
    document.getElementById('popUpID').textContent = `Identificación ${numID}`;
    
    //Selecciona el cuerpo de la tabla del popup
    const tablePopup = document.querySelector("#invoiceProducts tbody");
    //Desestructura los datos del array Products
    products.forEach(({ quantity, nameProduct, unitValue, subT }) => {
        //Crea un fila por producto
        const rows = document.createElement('tr');
        //A cada fila le agrega la información correspondiente
        rows.innerHTML = `
        <td>${quantity}</td>
        <td>${nameProduct}</td>
        <td>${unitValue}</td>
        <td>${subT}</td>
        `;
        //Lo agrega en el HTML
        tablePopup.appendChild(rows);
    });

    //Agrega información al popup de acuerdo a la desestructuración
    document.getElementById('popUpSubTotal').textContent = `SUBTOTAL: ${subTotal}`;
    document.getElementById('popUpVat').textContent = `VAT: ${vat}`;
    document.getElementById('popUpTotal').textContent = `TOTAL: ${total}`;

    //Evento al producirse el cierre del popup
    const btnClose = document.getElementById('popUpClose');
    btnClose.addEventListener('click', closePopup);

    //Evento al confirmar el pago
    const btnConfirm = document.getElementById('confirm');
    btnConfirm.addEventListener('click', confirmInvoice);
}

/**
 * Función para cerrar el popup
 */
export const closePopup = () => {
    //Selecciona el popup
    const popup = document.getElementById('popup');
    //Modifica los estilos del popup al cerrarse
    popup.style.display = "none"; //Oculta el popup
    //Recarga la página al cerrarse el popup
    location.reload();
}

/**
 * Función para confirmar compra
 */
export const confirmInvoice = () => {
    //Selecciona el popup
    const popup = document.getElementById('popup');
    //Modifica los estilos del popup al cerrarse
    popup.style.display = "none"; //Oculta el popup

    Swal.fire({
        title: "Thank you for your purchase.",
        icon: "success",
        draggable: true
      }).then(() => {
        // Recarga la página después de cerrar el popup
        location.reload();
    });
}