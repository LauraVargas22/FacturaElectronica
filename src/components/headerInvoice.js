import '../Models/invoiceModel.js';
export class HeaderInvoice extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    render(){
        
        this.innerHTML = /* html */ `
        <style rel="stylesheet">
          @import "../css/style.css";
        </style>
        <div class="row p-4">
            <label for="numInvoice" class="col-3 form-label">Num Invoice</label>
            <div class="col-6">
            <input type="text" class="border-secondary form-control" name="numInvoice" id="numInvoice">
            </div>
        </div>
        <div class="row p-4">
            <label for="numID" class="col-3 form-label">ID</label>
            <div class="col-6">
            <input type="text" class="border-secondary form-control" name="numID" id="numId" placeholder="80040236">
            </div>
        </div>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 p-4">
            <div class="col">
                <label for="names" class="form-label">Name</label>
                <input type="text" class="border-secondary form-control" name="names" placeholder="Eduardo" required>
            </div>
            <div class="col">
                <label for="surname" class="form-label">Surname</label>
                <input type="text" class="border-secondary form-control" id="surname" name="surname" placeholder="Becerra" required>
            </div>
        </div>
        <div class="row p-4">
            <label for="address" class="col-3 form-label">Address</label>
            <div class="col-6">
                <input type="text" class="border-secondary form-control" name="address" id="address" placeholder="cra 4 #5-45">
            </div>
        </div>
        <div class="row p-4">
            <label for="email" class="col-3 form-label">Email</label>
            <div class="col-6">
                <input type="text" class="border-secondary form-control" name="email" id="email" placeholder="name@example.com">
            </div>
        </div>
        `
    }
}
customElements.define("header-invoice", HeaderInvoice);