<script>
    import Icon  from 'svelte-awesome/components/Icon.svelte';
    import { plus, minus } from 'svelte-awesome/icons';
    import { createEventDispatcher } from 'svelte';
    import { fly } from 'svelte/transition';

    export let pizza = {};
    export let added;
    export let allowOneOnly = false;
    export let count = 0;

    let price = 12.22;

    const dispatch = createEventDispatcher();

    function addPizza(event) {
        count += 1;
        dispatch('addPizza', pizza);
    }

    function remPizza(event) {
        count -= 1;
        dispatch('remPizza', pizza);
    }

    // cart --> checkout --> order complete

</script>


<div class="flex mb-4">
  <div class="w-1/3 flex justify-center align-center py-6">
    <!-- pizza image -->
    <div class="pizza-item__image rounded-full h-32 w-32 shadow-md bg-gray-400 overflow-hidden">
        <img class="object-cover h-32 w-32" src={`images/${pizza.image}`} title={pizza.name} alt={pizza.name} />
    </div>
  </div>
  <div class="w-1/3 py-6">
        <div class="pizza-item__name">
            <div class="inline-block bg-yellow-400 text-2xl px-2 font-bold shadow-md mb-2">
                {pizza.name}
            </div><br/>
            <span class="inline-block bg-green-300 text-xs px-2 py-1 font-bold mb-2 rounded">
                Huge 18 / Classic Crust
            </span>
        </div>
        <div class="pb-4">
            {#if count}
                {#if allowOneOnly}
                    <button
                        class:opacity-50={count}
                        class:cursor-not-allowed={count}
                        class="rounded-full px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-teal-600 text-white border-teal-500 hover:border-transparent  md:text-lg xl:text-base font-semibold leading-tight shadow-md"
                    >
                        added
                    </button>
                {:else}
                    <div class="inline-flex">
                        <button on:click={remPizza} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l-full">
                            <Icon data={minus}></Icon>
                        </button>
                        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            {count}
                        </button>
                        <button on:click={addPizza} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r-full">
                            <Icon data={plus}></Icon>
                        </button>
                    </div>
                {/if}
            {:else}
                <button 
                    class="mt-8 rounded-full px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3  bg-transparent hover:bg-teal-600 hover:text-white border-teal-500 hover:border-transparent  md:text-lg xl:text-base font-semibold leading-tight shadow-md"
                    on:click={addPizza}
                >
                <Icon data={plus}></Icon> buy
                </button>
            {/if}
        </div>
  </div>
  <div class="w-1/3 py-6">
    <div class="pizza-item__name text-2xl px-2 shadow-md font-bold"></div>
    <div class="price-details">
        <div class="text-2xl px-4 text-right">
            <span class="text-gray-500">${price}</span> x <span class="text-gray-600">{count}</span> &rarr; <span class="text-gray-800 px-2 inline-block bg-yellow-400 shadow-md">${Math.round(price * count, 2)}</span>
        </div>
    </div>
  </div>
</div>