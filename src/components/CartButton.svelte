<script>
    import { getContext, onMount, onDestroy } from 'svelte';
    import Icon  from 'svelte-awesome/components/Icon.svelte';
    import { shoppingBag } from 'svelte-awesome/icons';

    const cart = getContext('cart')
    $: cartItemCount = $cart.length;
</script>
<style>
    .cart-count {
        top: -20px;
        right: -20px;
    }
</style>

<button class="absolute top-0 right-0 w-16 h-16 mr-16 bg-green hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow">
    <div class="relative">
        <Icon data={shoppingBag} scale={2}></Icon>
        {#if cartItemCount}
            <div class="cart-count absolute w-6 h-6 text-white bg-yellow-700 rounded-full">
                {cartItemCount}
            </div>
        {/if}
</button>