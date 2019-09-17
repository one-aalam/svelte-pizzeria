import { writable, get } from 'svelte/store';

export const cart = writable([]);

export const cartStore  = [
    cart.subscribe,
    function addToCart({ detail }) {
        cart.update(cart => [...cart, detail]);
    },
    function remFromCart({ detail }) {
        const [ firstItemWithId, ...restOfTheItemWithId ] = get(cart).filter(cartItem => cartItem.id === detail.id);
        const itemsOtherThanId = get(cart).filter(cartItem => cartItem.id !== detail.id);
        cart.set([...itemsOtherThanId, ...restOfTheItemWithId]);
    }
];