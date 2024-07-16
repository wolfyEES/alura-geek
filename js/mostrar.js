import { connectApi } from "./connectApi.js";
import { deleteProduct } from "./eliminar.js";

const products = document.querySelector("[data-products]");

function buildCard(name, price, image, id) {
    const card = document.createElement("ul");
    card.className = "product__card";
    card.innerHTML = `
        <div class="product__card__top">
            <li class="product__img"><img src="${image}" alt="${name}"></li>
            <li class="product__name">${name}</li>
        </div>
        <div class="product__card__bottom">
            <li class="product__price">P$ ${price}</li>
            <li><button class="product__card__delete" id="${id}" data-form-delete><img style="width: 2rem;" src="./assets/iconbasura.jpg" alt="ícone de lixeira"></button></li>
        </div>

    `;

    return card;
}

async function listProducts() {
    try {
        const productList = await connectApi.listProducts();

        if (productList.length > 0) {
            productList.forEach(product => {
                products.appendChild(buildCard(product.nome, product.preco, product.imagem, product.id));
            });

            const deleteButtons = document.querySelectorAll("[data-form-delete]");
            deleteButtons.forEach(btn => {
                btn.addEventListener("click", () => deleteProduct(btn.id));
            });
        } else {
            products.innerHTML = `
                <h1 class="no__product">NO HAY PRODUCTOS REGISTRADOS</h1>
            `;
        }
    } catch (error) {
        products.innerHTML = `
            <h1 class="no__product">NO SE PUDIERON CARGAR LOS PRODUCTOS</h1>
        `;
        console.error("Error al listar productos:", error);
    }
}

listProducts();
