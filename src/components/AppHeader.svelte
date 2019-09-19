<script>
    import { getContext, onMount, onDestroy } from 'svelte';
    import Icon  from 'svelte-awesome/components/Icon.svelte';
    import { shoppingBag } from 'svelte-awesome/icons';
    // pizzaSlice, carrot, cocktail
    import NavLink from "./NavLink.svelte";
    import CartButton from "./CartButton.svelte";
    import { sticky } from '../actions/sticky';
</script>

<style>
    :global(a.active) {
        color: green;
        font-weight: bold;
    }
</style>
<div use:sticky class="z-20 top-0 bg-white w-full max-w-screen-xl relative mx-auto pt-8 pb-8 lg:border-b-2 lg:border-gray-200 shadow-md">
    <div class="xl:flex -mx-6 relative">
        <div class="px-6 text-left md:text-center xl:text-left max-w-2xl md:max-w-3xl mx-auto">
            <h1 class="text-3xl sm:text-4xl md:text-5xl xl:text-4xl font-light leading-tight"><strong>Svelte</strong> <span class="text-teal-500 font-normal">Pizzeria</span></h1>
              <nav>
                 <ul class="flex">
                    <li class="flex-1 mr-2 text-center uppercase">
                        <NavLink to="/">
                            <!-- <Icon data={pizzaSlice} scale={2}></Icon>--> Pizzas
                        </NavLink>
                    </li>
                    <li class="flex-1 mr-2 text-center uppercase">
                        <NavLink to="drinks">
                            <!-- <Icon data={cocktail} scale={2}></Icon> --> Drinks
                        </NavLink>
                    </li>
                    <li class="flex-1 mr-2 text-center uppercase">
                        <NavLink to="salads">
                            <!-- <Icon data={carrot} scale={2}></Icon>Salads --> Salads
                        </NavLink>
                    </li>
                </ul>
              </nav>
        </div>
        <CartButton/>
    </div>
</div>