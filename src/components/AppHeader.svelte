<script>
    import { getContext } from 'svelte';
    import Icon  from 'svelte-awesome/components/Icon.svelte';
    import { shoppingBag } from 'svelte-awesome/icons';
    import NavLink from "./NavLink.svelte";

    const cart = getContext('cart')
    $: cartItemCount = $cart.length;

</script>
<div class="w-full max-w-screen-xl relative mx-auto px-6 pt-12 pb-12 lg:border-b-2 lg:border-gray-200 sticky">
    <div class="xl:flex -mx-6">
        <div class="px-6 text-left md:text-center xl:text-left max-w-2xl md:max-w-3xl mx-auto">
            <h1 class="text-3xl sm:text-4xl md:text-5xl xl:text-4xl font-light leading-tight"><strong>Svelte</strong> <span class="text-teal-500 font-normal">Pizzeria</span></h1>
              <nav>
                 <ul class="flex">
                    <li class="flex-1 mr-2 text-center">
                        <NavLink to="/" class="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">Home</NavLink>
                    </li>
                    <li class="flex-1 mr-2 text-center">
                        <NavLink to="about" class="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4">About</NavLink>
                    </li>
                </ul>
              </nav>
        </div>
        <div class="sticky">
    <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        <Icon data={shoppingBag} scale={3}></Icon> {cartItemCount}
    </button>
</div>
    </div>
</div>