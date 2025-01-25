## Factura Electrónica
Desarrollo de factura electrónica por medio de información ingresada por el usuario. El proyecto se puede visualizar en el siguiente link: 

El proyecto se realizó mediante diversas tecnologías las cuales fueron: Vite, Bootstrap, Javascript, HTML, CSS, Sweetalert2.

# Pasos para su clonación:
    1. git clone https://github.com/LauraVargas22/FacturaElectronica.git
    2. cd carpeta
    3. npm install
    Ejecución:
    4. npm run dev

# Web Component:
Para el ingreso de los datos del usuario se usaron web components, así mismo cada factura tiene un número de diferenciación.

# Creación de Productos:
Para el ingreso de los prodcutos se tiene un card principal en el HTML, en el cual se pueden agregar o eliminar elementos. Al agregar se ingresan los datos de los productos, estos datos se van actualizando al mismo tiempo en una tabla en la cual se encuentran cada uno de los datos, la tabla cuenta con un botón de eliminación el cual permite al usuario eliminar la fila con el producto.

Además, al ingresar cantidad y valor unitario del producto, se realiza la operación para calcular subtotal por producto.

# Resumen:
En el resumen se toma el subtotal de cada producto sumandolos para así obtener el subtotal de la factura, además se calcula el IVA sobre este valor y con esto se obtiene el valor total.

# Factura:
Con la información ingresada y almacena en un objeto literal, el cual se puede visualizar en consola al hacer click en el botón 'Pay'.