import '../Models/invoiceModel.js';
//Componente para crear form con información personal
export class HeaderInvoice extends HTMLElement {
    constructor() {
        super();
        this.render();
    }
    render(){
        //Crea ID de la factura
        let numInvoice = Date.now().toString(16);
        this.innerHTML = /* html */ `
        <style rel="stylesheet">
          @import "../css/style.css";
        </style>
        <div class="row p-4">
            <label for="numInvoice" class="col-3 form-label">Num Invoice</label>
            <div class="col-6">
            <!--ID predeterminado-->
            <input class="form-control" type="text" placeholder="${numInvoice}" aria-label="Disabled input example" disabled>
            </div>
        </div>
        <!--Identificación-->
        <div class="row p-4">
            <label for="numID" class="col-3 form-label">ID</label>
            <div class="col-6">
            <input type="number" class="form-control" name="numID" id="numId" placeholder="Enter ID..." required>
            </div>
        </div>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 p-4">
            <!--Nombres-->
            <div class="col">
                <label for="names" class="form-label">Name</label>
                <input id="names" type="text" class="form-control" name="names" placeholder="Enter Names..." required>
            </div>
            <!--Apellidos-->
            <div class="col">
                <label for="surname" class="form-label">Surname</label>
                <input type="text" class="form-control" id="surname" name="surname" placeholder="Enter Surname..." required>
            </div>
        </div>
        <!--Dirección-->
        <div class="row p-4">
            <label for="address" class="col-3 form-label">Address</label>
            <div class="col-6">
                <input type="text" class="form-control" name="address" id="address" placeholder="Enter Address..." required>
            </div>
        </div>
        <!--Email-->
        <div class="row p-4">
            <label for="email" class="col-3 form-label">Email</label>
            <div class="col-6">
                <input type="email" class="form-control" name="email" id="email" placeholder="Enter email..." required>
            </div>
        </div>
        `
    }
}
//Creación del elemento
customElements.define("header-invoice", HeaderInvoice);
