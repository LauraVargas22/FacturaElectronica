/*import { divProducts } from "./divProducts.js";

export const tableInvoice = (productsHTML) => {
    const tableProducts = document.getElementById("tableProducts");

    for (const productHTML of productsHTML) {
        const {id, cod, name, unitValue, quantity} = productHTML;
        
        const rowTable = document.createElement('tr');
        rowTable.innerHTML =  `
        <td>${id}</td>
        <td>${cod}</td>
        <td>${name}</td>
        <td>${unitValue}</td>
        <td>${quantity}</td>
        <td>${subTotalProduct(`${quantity}, ${unitValue}`)}</td>
        <td><button type="button" class="btn btn-danger" data-id="${id}" id="removeProduct">-</button></td>
        `;

        const removeProduct = rowTable.querySelector('#removeProduct');
        removeProduct.addEventListener("click", (e) =>{
            if(e.target.id == "removeProduct"){
                eliminarItemLista(e.target.dataset.id);
            }
        });
        tableProducts.appendChild(rowTable);
    }
}


const subTotalProduct = (quantity, unitValue) => {
    let subTotalProduct = `${quantity} * ${unitValue}`;

    return subTotalProduct;
}
const eliminarItemLista = (id) => {
    const rowToRemove = document.getElementById(`numProducts${id}`);
    if (rowToRemove) {
        rowToRemove.remove();
    }
    const tableRowToRemove = document.querySelector(`tr td button[data-id="${id}"]`).closest('tr');
    if (tableRowToRemove) {
        tableRowToRemove.remove();
    }
}

*/
