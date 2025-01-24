let productForm = document.querySelector("#dataProducts");

productForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let data = Object.fromEntries(new FormData(productForm));
    postData(data).then(r => {
        console.log(data)
    });
})

const postData = async (data) => {
    return JSON.stringify(data);
}