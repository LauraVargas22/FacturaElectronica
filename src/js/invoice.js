import { saveProducts } from "./data.js";
import Swal from 'sweetalert2';

export const showInvoice = (invoiceModels) => {
    const popup = document.getElementById("popup");
    popup.style.display = "block";

    const {numInvoice: {personalData: {numID, names, surname}} } = invoiceModels;
    const { numInvoice: { products } } = invoiceModels;
    const {numInvoice: {summary: {subTotal, vat, total}} } = invoiceModels;
    
    document.getElementById('popUpName').textContent = `Sr@ ${names} ${surname}`;
    document.getElementById('popUpID').textContent = `Identificación ${numID}`;
    
    const tablePopup = document.querySelector("#invoiceProducts tbody");
    products.forEach(({ quantity, nameProduct, unitValue, subT }) => {
        const rows = document.createElement('tr');
        rows.innerHTML = `
        <td>${quantity}</td>
        <td>${nameProduct}</td>
        <td>${unitValue}</td>
        <td>${subT}</td>
        `;
        tablePopup.appendChild(rows);
    });

    document.getElementById('popUpSubTotal').textContent = `SUBTOTAL: ${subTotal}`;
    document.getElementById('popUpVat').textContent = `VAT: ${vat}`;
    document.getElementById('popUpTotal').textContent = `TOTAL: ${total}`;

    const btnClose = document.getElementById('popUpClose');
    btnClose.addEventListener('click', closePopup);

    const btnConfirm = document.getElementById('confirm');
    btnConfirm.addEventListener('click', confirmInvoice);
}

export const closePopup = () => {
    const popup = document.getElementById('popup');
    popup.style.display = "none"; //Oculta el popup

    location.reload();
}

export const confirmInvoice = () => {
    const popup = document.getElementById('popup');
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