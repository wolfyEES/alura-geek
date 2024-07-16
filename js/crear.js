import { connectApi } from "./connectApi.js";

const form = document.querySelector("[data-form]");

async function createProduct(event) {
    event.preventDefault();

    const name = document.querySelector("[data-form-name]").value;
    const price = document.querySelector("[data-form-price]").value;
    const image = document.querySelector("[data-form-image]").value;

    try {
        await connectApi.buildProduct(name, price, image);
    } catch (error) {
        console.error("Error al crear el producto:", error);
    }

    window.location.reload(true);
}

form.addEventListener("submit", event => createProduct(event));
