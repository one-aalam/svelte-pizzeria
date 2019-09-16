<script>
    import { getContext } from 'svelte';
    import { get, derived } from 'svelte/store';
    import Icon  from 'svelte-awesome/components/Icon.svelte';
    import { shoppingBag } from 'svelte-awesome/icons';

    import { groupBy } from '../libs/utils';
    import PizzaItem from './PizzaItem.svelte';

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
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 30px;
        grid-row-gap: 40px;
    }
</style>

<div class="pizza-list container mx-auto relative">
    {#each Object.entries(cartItemsByType) as [id, [item, ...rest]], index (id)}
        <div class="pizza-item">
            <PizzaItem pizza={item} count={rest.length + 1} on:addPizza={addToCart} on:remPizza={remFromCart}/>
        </div>
    {/each}
</div>

