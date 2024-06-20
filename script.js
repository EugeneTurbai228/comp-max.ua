// copy menu for mobile
function copyMenu() {
    //copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat')
    var dptPlace = document.querySelector('.departments')
    dptPlace.innerHTML = dptCategory.innerHTML;

//copy inside nav to nav
var mainNav = document.querySelector('.header-nav nav')
var navPlace = document.querySelector('.off-canvas nav')
navPlace.innerHTML = mainNav.innerHTML;

// copy .header-top .wrapper to .thetop-nav
var topNav = document.querySelector('.header-top .wrapper')
var topPlace = document.querySelector('.off-canvas .thetop-nav')
topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();


//
const menuButton = document.querySelector('.trigger'),
closeButton = document.querySelector('.t-close'),
addclass = document.querySelector('.site');
menuButton.addEventListener('click', function(){
    addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function() {
addclass.classList.remove('showmenu')
})

//show sub menu on mobile
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand');
    this.closest('.has-child').classList.toggle('expand');
}

//slider
const swiper = new Swiper('.swiper', {
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  });


  //show search
  const searchButton = document.querySelector('.t-search'),
     tClose = document.querySelector('.search-close'),
     showClass = document.querySelector('.site');
searchButton.addEventListener('click', function() {
    showClass.classList.toggle('showsearch')
})
tClose.addEventListener('click', function() {
    showClass.classList.remove('showsearch')
})


/* show dpt menu */
const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
      dptClass = document.querySelector('.site');
dptButton.addEventListener('click', function() {
      dptClass.classList.toggle('showdpt')
})

//product image slider
var productThumb = new Swiper ('.small-image', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        481: {
            spaceBetween: 32,
        }
    }
});
var productBig = new Swiper ('.big-image', {
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: productThumb,
    }
})

//stock product bar
var stocks = document.querySelectorAll('.products .stock');
for (let x = 0; x < stocks.length; x++) {
    let stock = stocks[x].dataset.stock,
    available = stocks[x].querySelector('.qty-available').innerHTML,
    sold = stocks[x].querySelector('.qty-sold').innerHTML,
    percent = sold*100/stock;

    stocks[x].querySelector('.available').style.width = percent + '%';
}

//show cart on click
const divtoShow = '.mini-cart';
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector('.cart-trigger');

divTrigger.addEventListener('click', () => {
    setTimeout(() => {
        if(!divPopup.classList.contains('show')) {
            divPopup.classList.add('show');
        }
    }, 250 )
})



/* //close by click outside
document.addEventListener('click', (e) => {
    const isClosest = e.target.closest(divtoShow);
    if(!isClosest && divPopup.classList.contains('show')){
        divPopup.classList.remove('show')
    }
}) */






//cart

let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

cartIcon.onclick = () => {
    cart.classList.add("active");
};

closeCart.onclick = () => {
    cart.classList.remove("active");
};


//cart working
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
}else {
  ready();
}

//making function
function ready(){
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++){

    var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem );
    
    }

    //quantity changes
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    //add to cart
var addCart = document.getElementsByClassName("add-cart");
for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
   }
}






//remove items from cart
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}


//quantity Changed

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
} 


// Функція, яка буде викликатися при кліку на кнопку "Add to Cart"
function addCartClicked(event) {
    var button = event.target;
    var shopProduct = button.closest('.item'); // Пошук найближчого батьківського елементу з класом item
    var titleElement = shopProduct.querySelector(".product-title"); // Пошук елементу з класом product-title всередині елемента товару
    var currentElement = shopProduct.querySelector(".current"); // Пошук елементу з класом current всередині елемента товару
    
    if (titleElement && currentElement) {
        var title = titleElement.innerText;
        var current = currentElement.innerText;
        
        // Виведення назви товару і поточного значення в консоль
        console.log('Title:', title);
        console.log('Current Price:', current);
        
        // Тут можна додати додатковий код для додавання товару в кошик або інші дії
        var numberDisplay = document.getElementById('numberDisplay');
        
        // Отримання поточного значення числа і перетворення його у ціле число
        var currentNumber = parseInt(numberDisplay.innerText);
        
        // Збільшення числа на одиницю
        currentNumber++;
        
        // Оновлення вмісту елемента відображення числа в кошику
        numberDisplay.innerText = currentNumber;
    } else {
        console.error('Product title or current price element not found');
    }
}

// Отримання всіх кнопок "Add to Cart" і додавання до них обробника події
var addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(function(button) {
    button.addEventListener('click', addCartClicked);
});












document.addEventListener('DOMContentLoaded', function() {
    // Функція для зміни значення в полі введення
    function updateQuantity(event, delta) {
        var button = event.currentTarget; // Отримуємо кнопку, на яку натиснули
        var parentDiv = button.closest('.qty-control'); // Отримуємо найближчий батьківський елемент з класом 'qty-control'
        var quantityInput = parentDiv.querySelector('.quantity-input'); // Знаходимо поле введення в межах батьківського елемента

        if (quantityInput) {
            var currentValue = parseInt(quantityInput.value); // Отримуємо поточне значення поля введення і перетворюємо його в число
            var newValue = currentValue + delta;

            // Перевірка на мінімальне значення (1)
            if (newValue >= 1) {
                quantityInput.value = newValue; // Встановлюємо нове значення в поле введення
            } else {
                console.error('Quantity cannot be less than 1');
            }
        } else {
            console.error('Quantity input element not found');
        }
    }

    // Отримуємо всі кнопки "+" та "-" і додаємо обробники подій
    var plusButtons = document.querySelectorAll('.plus');
    var minusButtons = document.querySelectorAll('.minus');

    plusButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            updateQuantity(event, 1); // Збільшуємо значення на 1
        });
    });

    minusButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            updateQuantity(event, -1); // Зменшуємо значення на 1
        });
    });
});







        

function addProductToCart(title, current) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName("products one")[0]
    var cartItemsNames = cartItems.getElementsByClassName('product-title')
    for (var i = 0; i < cartItemsNames.length; i++){
        if (cartItemsNames[i].innerText == title){

        return;
    }
}




var cartBoxContent = `
                 <img src="assets/products/gigabity1.png" alt="" class="cart-img">
                 <div class="detail-box">
                  <div class="cart-product-title">GIGABYTE GeForce RTX4070 SUPER 12Gb EAGLE OC ICE</div>
                  <div class="cart-price">₴7698</div>
                  <input type="number" value="1" class="cart-quantity">
                 </div>
                 <!-- remove -->
                 <i class="ri-drinks-line cart-remove"></i>
`;
cartShopBox.innerText = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);

}




//update total
function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("₴", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);


        total = Math.round(total * 100) / 100;


        document.getElementsByClassName('total-price')[0].innerText = "₴" + total;
    }
}