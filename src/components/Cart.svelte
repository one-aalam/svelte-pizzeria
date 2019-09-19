<script>
    import { getContext } from 'svelte';
    import { get, derived } from 'svelte/store';
    import { Link } from "svelte-routing";
    import Icon  from 'svelte-awesome/components/Icon.svelte';
    import { shoppingBag } from 'svelte-awesome/icons';

    import { groupBy } from '../libs/utils';
    import { fetch } from '../libs/fetch';
    import AppSubHeader from '../components/AppSubHeader.svelte';

    import PizzaListItem from './PizzaListItem.svelte';

    let chargeAmount = 233;
    const to = '/'
    const groupById = groupBy('id');

    const cart = getContext('cart')
    const cartItemsByType = groupById(get(cart))

    let currentFilter = 'all';

    function addToCart({ detail }) {
        // cart.update(cart => [...cart, detail]);
        $cart = [...$cart, detail];
    }
    function remFromCart({ detail }) {
        const [ firstItemWithId, ...restOfTheItemWithId ] = $cart.filter(cartItem => cartItem.id === detail.id);
        const itemsOtherThanId = $cart.filter(cartItem => cartItem.id !== detail.id);
        $cart = [...itemsOtherThanId, ...restOfTheItemWithId];
    }

</script>

<style>
    .pizza-list {
        height: auto;
        min-height: calc(100vh);
    }
</style>

<div class="pizza-list container mx-auto relative">
    <AppSubHeader/>
    {#each Object.entries(cartItemsByType) as [id, [item, ...rest]], index (id)}
        <div class="pizza-item">
            <PizzaListItem pizza={item} count={rest.length + 1} on:addPizza={addToCart} on:remPizza={remFromCart}/>
        </div>
    {:else}
        <div></div>
        <div class="flex flex-col text-center pt-24">
            <h3 class="text-5xl text-green-600 pb-8">Your cart's hungry!</h3>
            <Link to="{to}">
                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Let's add some Pizzas!
                </button>
            </Link>    
        </div>   
    {/each}
    {#if Object.entries(cartItemsByType).length}
        <hr/>
        <div class="flex mb-4">
            <div class="w-1/3 py-6">
                <button class="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded">&larr; Continue Shopping</button>
            </div>
            <div class="w-1/3 py-6">
                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded">
                    Apply Coupon!
                </button>
            </div>
            <div class="w-1/3 py-6 flex flex-col">
                <div class="text-2xl px-4 text-right">Sub-Total: $141.34</div>
                <div class="text-2xl px-4 text-right">Delivery Charges: $141.34</div>
                <div class="text-2xl px-4 text-right">Tax: $141.34</div>
                <hr/>
                <div class="text-2xl px-4 text-right">Total: $141.34</div>
                <button class="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 border border-teal-700 rounded shadow">Checkout for $141.34 &rarr;</button>
            </div>
        </div>
    {/if}
</div>

