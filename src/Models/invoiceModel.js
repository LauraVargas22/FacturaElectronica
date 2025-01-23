const invoiceModel = {
    numInvoice: {
        personalData: {
            numID: '',
            names: '',
            surname: '',
            address: '',
            email: '',
        },
        products: [
            {
                cod: '',
                nameProduct: '',
                unitValue: '',
                quantity: '',
                subT: ''
            }
        ],
        Summary: {
            subTotal: '',
            vat: '',
            total: '',
        }
    }
}

export default invoiceModel;