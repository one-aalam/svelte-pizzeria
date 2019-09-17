
import { setProduct, setProductOption } from './set-product';
import { pizzaList } from './pizza';
import { saladList } from './salad';
import { drinkList } from './drink';
import { crusts, sauces, cheeses, veggies, meats, spices, saladDressings } from './options';

const PRD_TYPE_PIZZA = 'pizza';
const PRD_TYPE_DRINK = 'drink';
const PRD_TYPE_SALAD = 'salad';

const PRD_OPTION_CRUST = 'crust';
const PRD_OPTION_SAUCE = 'sauce';
const PRD_OPTION_CHEESE = 'cheese';
const PRD_OPTION_VEGGIE = 'veggie';
const PRD_OPTION_MEAT = 'meat';
const PRD_OPTION_SPICE = 'spice';
const PRD_OPTION_SALAD_DRESSING = 'saladDressing';

export const pizzas = pizzaList.map(p => setProduct(p, PRD_TYPE_PIZZA))
export const salads = saladList.map(p => setProduct(p, PRD_TYPE_SALAD))
export const drinks = drinkList.map(p => setProduct(p, PRD_TYPE_DRINK))

export const options = {
    crusts: crusts.map(o => setProductOption(o, PRD_OPTION_CRUST)),
    sauces: sauces.map(o => setProductOption(o, PRD_OPTION_SAUCE)),
    cheeses: cheeses.map(o => setProductOption(o, PRD_OPTION_CHEESE)),
    veggies: veggies.map(o => setProductOption(o, PRD_OPTION_VEGGIE)),
    meats: meats.map(o => setProductOption(o, PRD_OPTION_MEAT)),
    spices: spices.map(o => setProductOption(o, PRD_OPTION_SPICE)),
    saladDressings: saladDressings.map(o => setProductOption(o, PRD_OPTION_SALAD_DRESSING))
}

/* Product Sizes and prices */
export const pizzaSizes = [
        {id: 1, type: PRD_TYPE_PIZZA, name:"Personal 8\"", price: 6.15, premiumPrice: 7.65, toppingPrice: 0.65, isGlutenFree: false},
        {id: 2, type: PRD_TYPE_PIZZA, name:"Medium 12\"", price: 12.40, premiumPrice: 16.95, toppingPrice: 1.35, isGlutenFree: false},
        {id: 3, type: PRD_TYPE_PIZZA, name:"Large 14\"", price: 14.45, premiumPrice: 20.95, toppingPrice: 1.70, isGlutenFree: false},
        {id: 4, type: PRD_TYPE_PIZZA, name:"X-Large 16\"", price: 16.50, premiumPrice: 23.45, toppingPrice: 2.05, isGlutenFree: false},
        {id: 5, type: PRD_TYPE_PIZZA, name:"Huge 18\"", price: 17.95, premiumPrice: 26.95, toppingPrice: 2.25, isGlutenFree: false},

        // $4.50  markup for gluten free.
        {id: 6, type: PRD_TYPE_PIZZA, name:"Gluten Free 12\"", price: 16.90, premiumPrice: 21.45, toppingPrice: 1.35, isGlutenFree: true}
    ];

export const saladSizes = [
        {id: 7, type: PRD_TYPE_SALAD, name: "Side", price: 3.95, toppingPrice: 0.65},
        {id: 8, type: PRD_TYPE_SALAD, name: "Entree", price: 7.95, toppingPrice: 1.30},
        {id: 9, type: PRD_TYPE_SALAD , name: "Entree", price: 8.95, toppingPrice: 1.30}
    ];

export const drinkSizes = [
        {id: 10, type: PRD_TYPE_DRINK, name: "Can", price: 1.50},
        {id: 11, type: PRD_TYPE_DRINK, name: "20 oz", price: 1.95},
        {id: 12, type: PRD_TYPE_DRINK, name: "2 liter", price: 2.75},
        {id: 13, type: PRD_TYPE_DRINK, name: "20 oz", price: 1.75},
        {id: 14, type: PRD_TYPE_DRINK, name: "Serving", price: 1.75},
        {id: 15, type: PRD_TYPE_DRINK, name: "Serving", price: 2.00}
    ];

export const orderStatuses = [
        {id: 1, name: "Ordered"},
        {id: 2, name: "PickedUp"},
        {id: 3, name: "Delivered"},
        {id: 4, name: "Cancelled"},
        {id: 5, name: "Pending"}
]
