class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
        this.getSumm();//сумма всех товаров
    }

    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const item = new ProductItem(product);
            block.insertAdjacentHTML("beforeend", item.render());
//              block.innerHTML += item.render();
        }
    }

    getSumm() {
        let summ = 0;
        for (let product of this.goods) {
            summ += product.price;
        }
        return summ;
    }
}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }

    render() {
        return `<div class="product-item">
                <img src="${this.img}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();

list.getSumm();

class CartList {
    constructor(container = '.cart') {
        this.container = container;
        this.goods = []; //товары в корзине
        this.summ = 0; //сумма всех товаров
        this._getSumm();//считаем сумму всех товаров
        this.renderCart();//вывод товаров на страницу
        this.addProduct();//добваляем товар в корзину
        this.delProduct();//удаляем товар из корзины
    }

    _getSumm() {

    }

    renderCart() {

    }

    addProduct() {

    }

    delProduct() {

    }
}

class CartItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.count = product.count; //количество данного вида товара в корзине
        this.img = img;
        this.renderItem();
    }
    renderItem() {

    }
}

//const products = [
//    {id: 1, title: 'Notebook', price: 2000},
//    {id: 2, title: 'Mouse', price: 20},
//    {id: 3, title: 'Keyboard', price: 200},
//    {id: 4, title: 'Gamepad', price: 50},
//];
//
//const renderProduct = (product,img='https://placehold.it/200x150') => {
//    return `<div class="product-item">
//                <img src="${img}">
//                <h3>${product.title}</h3>
//                <p>${product.price}</p>
//                <button class="buy-btn">Купить</button>
//            </div>`
//};
//const renderPage = list => document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
//
//renderPage(products);