const invoiceModel = [
    NumInvoice, {
        personalData: {
            NumID: '',
            Names: '',
            Surname: '',
            Address: '',
            Email: '',
        },
        Products: [
            {
                cod: '',
                name: '',
                UnitValue: '',
                Quantity: '',
                SubT: ''
            }
        ],
        Summary: {
            SubTotal: '',
            Vat: '',
            Total: '',
        }
    }
]

export default invoiceModel;