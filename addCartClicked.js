function addCartClicked(event) {
    var button = event.target;
    var shopProduct = button.closest('.item'); // Пошук найближчого батьківського елементу з класом item
    var titleElement = shopProduct.querySelector(".product-title"); // Пошук елементу з класом product-title всередині елемента товару
    var currentElement = shopProduct.querySelector(".current");
    var productImg = shopProduct.querySelector(".product-title"); // Пошук елементу з класом product-title всередині елемента товару
    var imgElement = shopProduct.querySelector(".product-image img"); // Пошук <img> елемента всередині елемента товару з класом product-image
    if (titleElement) {
        var title = titleElement.innerText;

        var current = currentElement.innerText;
        var productImg = shopProduct.src;

        addProductToCart('Added to cart:', title, current, imgElement);

    } else {
        console.error('Product title element not found');
    }
}
