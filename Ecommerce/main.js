const parent = document.getElementById("parent");
const items = document.getElementsByClassName("item");

function updateTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < items.length; i++) {
        let quantity = parseInt (items[i].querySelector('.quantity').innerHTML);
        let price = parseInt(items[i].querySelector('.price').innerHTML);
        totalPrice += quantity * price;
    }
    document.getElementById('totalPrice').innerHTML = totalPrice + ' CFA'
}


for (let i = 0; i < items.length; i++) {
    let btnPlus = items[i].querySelector('.btn-plus');
    let btnMinus = items[i].querySelector('.btn-minus');
    let btnDelete = items[i].querySelector('.btn-delete');
    let btnLike = items[i].querySelector('.btn-like');
    let quantity = items[i].querySelector('.quantity');
    let total = items[i].querySelector('.total');

    let qty = parseInt(quantity.innerHTML);
    let price = parseInt(items[i].querySelector('.price').innerHTML);

    btnPlus.addEventListener("click", function() {
        qty++;
        quantity.innerHTML = qty;
        total.innerHTML = qty * price;
        updateTotalPrice();
    });

    btnMinus.addEventListener("click", function() {
        if (qty > 0) {
            qty--;
            quantity.innerHTML = qty;
            total.innerHTML = qty * price;
            updateTotalPrice();
        }
    });

    btnDelete.addEventListener("click", function() {
        items[i].remove();
        updateTotalPrice();
    });

    btnLike.addEventListener("click", function() {
        btnLike.classList.toggle('liked');
    });
}


updateTotalPrice();
