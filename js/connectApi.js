async function listProducts() {
    try {
        const response = await fetch("https://alurageek-json-server.vercel.app/produtos");
        const products = await response.json();
        return products;
    } catch (error) {
        console.error("Error al listar productos:", error);
        throw error;
    }
}

async function buildProduct(name, price, image) {
    try {
        const formattedPrice = parseFloat(price).toFixed(2).replace('.', ',');

        const response = await fetch("https://alurageek-json-server.vercel.app/produtos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: name,
                preco: formattedPrice,
                imagem: image
            })
        });
        
        const newProduct = await response.json();
        return newProduct;
    } catch (error) {
        console.error("Error al construir producto:", error);
        throw error;
    }
}

async function deleteProduct(productId) {
    try {
        const response = await fetch(`https://alurageek-json-server.vercel.app/produtos/${productId}`, {
            method: "DELETE"
        });
        const data = await response.json();
        console.log(data); // Log de confirmación de eliminación
    } catch (error) {
        console.error("Error al eliminar producto:", error);
        throw error;
    }
}

export const connectApi = {
    listProducts,
    buildProduct,
    deleteProduct
};
