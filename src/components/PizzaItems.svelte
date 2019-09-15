<script>
    import { getContext } from 'svelte';
    import Icon  from 'svelte-awesome/components/Icon.svelte';
    import { shoppingBag } from 'svelte-awesome/icons';
    import PizzaItem from './PizzaItem.svelte';
    export let items = [];

    const cart = getContext('cart')

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
    $: cartItemCount = $cart.length;
</script>

<style>
    .pizza-list {
        height: auto;
        min-height: calc(100vh);
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 30px;
        grid-row-gap: 40px;
    }
</style>

<div class="sticky">
    <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        <Icon data={shoppingBag} scale={3}></Icon> {cartItemCount}
    </button>
</div>
<div class="pizza-list container mx-auto relative">
    {#each items as pizza, index (pizza.id)}
        <div class="pizza-item">
            <PizzaItem {pizza} on:addPizza={addToCart} on:remPizza={remFromCart}/>
        </div>
    {/each}
</div>

