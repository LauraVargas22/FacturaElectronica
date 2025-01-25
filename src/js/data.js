export const saveProducts = (summarySubTotal, summaryVat, summaryTotal) => {

    const personalData = {
        numID: document.getElementById('numId')?.value || '',
        names: document.getElementById('names')?.value || '',
        surname: document.getElementById('surname')?.value || '',
        address: document.getElementById('address')?.value || '',
        email: document.getElementById('email')?.value || '',
    }

    const products = [];
    const productRows = document.querySelectorAll('.product-row');
    productRows.forEach((tr) => {
        const id = tr.dataset.id;
        products.push({
            cod: document.getElementById(`cod${id}`)?.value || '',
            nameProduct: document.getElementById(`nameProduct${id}`)?.value || '',
            unitValue: parseFloat(document.getElementById(`unitValue${id}`)?.value || 0),
            quantity: parseFloat(document.getElementById(`quantity${id}`)?.value || 0),
            subT: parseFloat(document.getElementById(`tableSubTotal${id}`)?.textContent || 0),
        });
    });

    const summary =  {
        subTotal: summarySubTotal,
        vat: summaryVat,
        total: summaryTotal,
    };

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
