//import '../Models/invoiceModel.js';
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
            <label for="NumInvoice" class="col-3 form-label">Num Invoice</label>
            <div class="col-6">
            <input type="text" class="form-control" name="NumInvoice" id="numInvoice">
            </div>
        </div>
        <div class="row p-4">
            <label for="NumID" class="col-3 form-label">ID</label>
            <div class="col-6">
            <input type="text" class="form-control" name="NumID" id="numId" placeholder="80040236">
            </div>
        </div>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 p-4">
            <div class="col">
                <label for="Names" class="form-label">Name</label>
                <input type="text" class="form-control" name="Names" placeholder="Eduardo" required>
            </div>
            <div class="col">
                <label for="Surname" class="form-label">Surname</label>
                <input type="text" class="form-control" id="surname" name="Surname" placeholder="Becerra" required>
            </div>
        </div>
        <div class="row p-4">
            <label for="Address" class="col-3 form-label">Address</label>
            <div class="col-6">
                <input type="text" class="form-control" name="Address" id="address" placeholder="cra 4 #5-45">
            </div>
        </div>
        <div class="row p-4">
            <label for="Email" class="col-3 form-label">Email</label>
            <div class="col-6">
                <input type="text" class="form-control" name="Email" id="email" placeholder="name@example.com">
            </div>
        </div>
        `
    }
}
customElements.define("header-invoice", HeaderInvoice);