/**
 * Función para el almacenamiento de los datos ingresados
 * @param {Number} summarySubTotal SubTotal de la factura
 * @param {Number} summaryVat IVA de la factura
 * @param {Number} summaryTotal Total de la factura
 * @returns {Object}
 */
export const saveProducts = (summarySubTotal, summaryVat, summaryTotal) => {
    //Selecciona los datos ingresados por el usuario correspondientes a información personal
    const personalData = {
        numID: document.getElementById('numId')?.value || '', //Identificación
        names: document.getElementById('names')?.value || '', //Nombres
        surname: document.getElementById('surname')?.value || '', //Apellidos
        address: document.getElementById('address')?.value || '', //Dirección
        email: document.getElementById('email')?.value || '', //Email
    }

    //Inicialización de array para almacenar los productos
    const products = [];
    //Selecciona TODOS los elementos con la clase 'producto-row'
    const productRows = document.querySelectorAll('.product-row');
    //Por cada elemento seleccionado
    productRows.forEach((tr) => {
        //Obtener el valor del atributo
        const id = tr.dataset.id;
        //Por cada producto selecciona los datos y los almacena
        products.push({
            cod: document.getElementById(`cod${id}`)?.value || '', //Código
            nameProduct: document.getElementById(`nameProduct${id}`)?.value || '', //Nombre del Producto
            unitValue: parseFloat(document.getElementById(`unitValue${id}`)?.value || 0), //Valor Unitario
            quantity: parseFloat(document.getElementById(`quantity${id}`)?.value || 0), //Cantidad
            subT: parseFloat(document.getElementById(`tableSubTotal${id}`)?.textContent || 0), //Subtotal
        });
    });

    //Toma los valores tomados como parámetros
    const summary =  {
        subTotal: summarySubTotal,
        vat: summaryVat,
        total: summaryTotal,
    };

    //Toda la información obtenida la almacena en un objeto literal
    const invoiceModels = {
        numInvoice: {
            personalData,
            products,
            summary,
        },
    };
    console.log(invoiceModels);
    return invoiceModels;
}
