const clearBtn = document.querySelector("[data-form-clear]");

clearBtn.addEventListener("click", () => {
    const nameInput = document.querySelector("[data-form-name]");
    const priceInput = document.querySelector("[data-form-price]");
    const imageInput = document.querySelector("[data-form-image]");
    const saveButton = document.querySelector(".submit__btn");
    const message = document.querySelector(".message");

    nameInput.value = "";
    priceInput.value = "";
    imageInput.value = "";
    saveButton.disabled = true;
    message.textContent = "";
});
