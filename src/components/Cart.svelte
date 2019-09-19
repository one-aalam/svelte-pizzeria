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
                <Link to="{to}">
                    <button class="bg-transparent text-teal-700 font-semibold hover:text-teal-500 py-2 px-4">&larr; Continue Shopping</button>
                </Link>
            </div>
            <div class="w-1/3 py-6">
                  <form class="px-4 py-2 pb-8 mb-4">
                    <div class="mb-4">
                    <label class="block text-gray-700 text-sm mb-2" for="username">
                        Use CODE <span class="font-bold">SVELTE</span> to get 10% discount upto $10
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ccode" type="text" placeholder="code...">
                    </div>
                    <button class="bg-white text-xs uppercase hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded">
                        Apply Coupon
                    </button>
                  </form>
            </div>
            <div class="w-1/3 py-6 flex flex-col">
                <div class="text-1xl px-4 text-right text-gray-600 mb-1">
                     <span class="text-gray-500 uppercase">SubTotal</span> <span class="px-2 inline-block bg-yellow-300 shadow-md">$141.34</span>
                </div>
                <div class="text-1xl px-4 text-right text-gray-600 mb-1">
                    <span class="text-gray-500 uppercase">Delivery Charges</span> <span class="text-gray-600">$141.34</span>
                </div>
                <div class="text-1xl px-4 text-right text-gray-600 mb-2">
                    <span class="text-gray-500 uppercase">Tax</span> <span class="text-gray-600">$141.34</span>
                </div>
                <hr/>
                <div class="text-2xl px-4 text-right mt-4 mb-4">
                    <span class="text-gray-500">Total</span> &rarr; <span class="px-2 inline-block bg-yellow-400 shadow-md">$141.34</span>
                </div>
                <button class="text-2xl inline-block bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 border-teal-700 rounded shadow text-right uppercase">
                    Checkout <span class="px-2 inline-block text-gray-700 bg-green-400">$141.34</span>
                </button>
            </div>
        </div>
    {/if}
</div>

