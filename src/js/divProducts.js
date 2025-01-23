export const divProducts = () => {
    let id = Date.now().toString(16);
    let productsHTML = /*HTML*/ `
    <div class="row mt-3" id="numProducts${id}">
        <div class="row p-4">
            <label for="cod" class="col-3 form-label">Code</label>
            <div class="col-6">
            <input type="text" class="border-secondary form-control" id="cod${id}" name="cod${id}">
            </div>
        </div>
        <div class="row p-4">
            <label for="name" class="col-3 form-label">Name Product</label>
            <div class="col-6">
            <input type="text" class="border-secondary form-control" id="name${id}" name="name${id}">
            </div>
        </div>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 p-4">
            <div class="col">
                <label for="UnitValue" class="form-label">Unit Value</label>
                <input type="text" class="border-secondary form-control" id="unitValue${id}" name="unitValue${id}" required>
            </div>
            <div class="col">
                <label for="Quantity" class="form-label">Quantity</label>
                <input type="text" class="border-secondary form-control" id="quantity${id}" name="quantity${id}"required>
            </div>
        </div>
        <div class="col-2">
            <button type="button" class="btn btn-danger" data-id="${id}" id="removeProduct">-</button>
        </div>
    </div>
    `;
    return productsHTML;
}

export const tableInvoice = (productsHTML) => {
    const tableProducts = document.getElementById("tableProducts");

    for (const productHTML of productsHTML) {
        const {id, cod, name, unitValue, quantity} = productHTML;
            
        const rowTable = document.createElement('tr');
        rowTable.innerHTML = /*HTML*/ `
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
    };
}


const subTotalProduct = (quantity, unitValue) => {
    let subTotalProduct = `${quantity} * ${unitValue}`;

    return subTotalProduct;
}