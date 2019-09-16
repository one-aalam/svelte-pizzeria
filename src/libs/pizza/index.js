
import { setProduct } from './set-product';
import { pizzaList } from './pizza';
import { saladList } from './salad';
import { drinkList } from './drink';

const PRD_TYPE_PIZZA = 'pizza';
const PRD_TYPE_DRINK = 'drink';
const PRD_TYPE_SALAD = 'salad';

export const pizzas = pizzaList.map(p => setProduct(p, PRD_TYPE_PIZZA))
export const salads = saladList.map(p => setProduct(p, PRD_TYPE_SALAD))
export const drinks = drinkList.map(p => setProduct(p, PRD_TYPE_DRINK))