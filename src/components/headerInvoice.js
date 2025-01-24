import '../Models/invoiceModel.js';
export class HeaderInvoice extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    render(){
        let numInvoice = Date.now().toString(16);
        this.innerHTML = /* html */ `
        <style rel="stylesheet">
          @import "../css/style.css";
        </style>
        <div class="row p-4">
            <label for="numInvoice" class="col-3 form-label">Num Invoice</label>
            <div class="col-6">
            <p class="form-control">${numInvoice}</p>
            </div>
        </div>
        <div class="row p-4">
            <label for="numID" class="col-3 form-label">ID</label>
            <div class="col-6">
            <input type="text" class="form-control" name="numID" id="numId" placeholder="Enter ID...">
            </div>
        </div>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 p-4">
            <div class="col">
                <label for="names" class="form-label">Name</label>
                <input type="text" class="form-control" name="names" placeholder="Enter Names..." required>
            </div>
            <div class="col">
                <label for="surname" class="form-label">Surname</label>
                <input type="text" class="form-control" id="surname" name="surname" placeholder="Enter Surname..." required>
            </div>
        </div>
        <div class="row p-4">
            <label for="address" class="col-3 form-label">Address</label>
            <div class="col-6">
                <input type="text" class="form-control" name="address" id="address" placeholder="Enter Address...">
            </div>
        </div>
        <div class="row p-4">
            <label for="email" class="col-3 form-label">Email</label>
            <div class="col-6">
                <input type="text" class="form-control" name="email" id="email" placeholder="Enter email...">
            </div>
        </div>
        `
    }
}
customElements.define("header-invoice", HeaderInvoice);