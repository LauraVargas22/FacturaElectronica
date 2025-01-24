let summarySubTotal = 0;
let summaryVat = 0;
let summaryTotal = 0;

export const createProducts = () => {
    let id = Date.now().toString(16);
    let productsHTML = /*HTML*/ `
    <div class="row mt-3" id="numProducts${id}">
        <div class="row p-4">
            <label class="col-3 form-label">Name Product</label>
            <div class="col-6">
            <input type="text" class="border-secondary form-control product-input" id="nameProduct${id}" name="nameProduct${id}" data-id="${id}" data-field="Name">
            </div>
        </div>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 p-4">
            <div class="col">
                <label class="form-label">Unit Value</label>
                <input type="text" class="border-secondary form-control product-input" id="unitValue${id}" name="unitValue${id}" data-id="${id}" data-field="UnitValue">
            </div>
            <div class="col">
                <label class="form-label">Quantity</label>
                <input type="text" class="border-secondary form-control product-input" id="quantity${id}" name="quantity${id}" data-id="${id}" data-field="Quantity">
            </div>
        </div>
        <div class="col-2">
            <button type="button" class="btn btn-danger remove-product" data-id="${id}">-</button>
        </div>
    </div>
    `;

    const tableBody = document.querySelector("#tableProducts tbody");
    const rowTable = document.createElement('tr');
    rowTable.setAttribute("id", `row${id}`);
    rowTable.innerHTML = /*HTML*/ `
        <td>${id}</td>
        <td id="tableName${id}"></td>
        <td id="tableUnitValue${id}"></td>
        <td id="tableQuantity${id}"></td>
        <td id="tableSubTotal${id}"></td>
        <td><button type="button" class="btn btn-danger remove-product" data-id="${id}">-</button></td>
        `;
        tableBody.appendChild(rowTable);

    setTimeout(() => {
        const inputs = document.querySelectorAll(`.product-input[data-id="${id}"]`);
        inputs.forEach(input => {
            input.addEventListener("input", (e) => {
            const field = e.target.dataset.field;
            const value = e.target.value;

            const tableRow = document.querySelector(`#table${field}${id}`);
            if (tableRow) tableRow.innerText = value;

            if (field === "UnitValue" || field === "Quantity") {
                const unitValue = parseFloat(document.getElementById(`unitValue${id}`).value || 0);
                const quantity = parseFloat(document.getElementById(`quantity${id}`).value || 0);

                const subTotal = (quantity * unitValue).toFixed(2);

                document.getElementById(`tableSubTotal${id}`).textContent = `${subTotal}`;

                summarySubTotal += parseFloat(subTotal);
                const subTotalInvoice = document.getElementById('subTotalInvoice').innerText = `${summarySubTotal}`;

                summaryVat = parseFloat(summarySubTotal * 19 / 100).toFixed(2);
                const vatInvoice = document.getElementById('vatInvoice').innerText = `${summaryVat}`;

                summaryTotal = (parseFloat(summarySubTotal) + parseFloat(summaryVat)).toFixed(2);
                const totalInvoice = document.getElementById('totalInvoice').innerText = `${summaryTotal}`;
            }
        });
    });

        const removeProducts = document.querySelectorAll(`.remove-product[data-id="${id}"]`);
        removeProducts.forEach(removeProduct => {
            removeProduct.addEventListener("click", () => {
                const subTotal = parseFloat(document.getElementById(`tableSubTotal${id}`).textContent || 0);
                summarySubTotal -= subTotal;
                const subTotalInvoice = document.getElementById('subTotalInvoice').innerText = `${summarySubTotal}`;

                summaryVat = parseFloat(summarySubTotal * 19 / 100).toFixed(2);
                const vatInvoice = document.getElementById('vatInvoice').innerText = `${summaryVat}`;

                summaryTotal = (parseFloat(summarySubTotal) + parseFloat(summaryVat)).toFixed(2);
                const totalInvoice = document.getElementById('totalInvoice').innerText = `${summaryTotal}`;

                document.querySelector(`#numProducts${id}`).remove();
                document.querySelector(`#row${id}`).remove();
            });
        })
    }, 0);
    return productsHTML;
}