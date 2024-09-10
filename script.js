document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productElement = event.target.closest('.product');
            const productId = productElement.getAttribute('data-id');
            const productName = productElement.querySelector('h2').textContent;
            const productPrice = parseFloat(productElement.querySelector('.price').textContent.replace('$', ''));

            addToCart(productId, productName, productPrice);
            updateCartDisplay();
        });
    });

    function addToCart(id, name, price) {
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }
    }

    function updateCartDisplay() {
        cartItemsElement.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            total += item.price * item.quantity;
            const cartItemElement = document.createElement('li');
            cartItemElement.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
            cartItemsElement.appendChild(cartItemElement);
        });

        cartTotalElement.textContent = `$${total.toFixed(2)}`;
    }
});
