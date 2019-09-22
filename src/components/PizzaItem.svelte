<script>
    import Icon  from 'svelte-awesome/components/Icon.svelte';
    import { plus, minus } from 'svelte-awesome/icons';
    import { createEventDispatcher } from 'svelte';
    import { fly } from 'svelte/transition';
    import { pizzaSizes, saladSizes, drinkSizes } from '../libs/pizza';

    export let pizza = {};
    export let added;
    export let allowOneOnly = false;
    export let count = 0;

    const dispatch = createEventDispatcher();

    function addPizza(event) {
        count += 1;
        dispatch('addPizza', pizza);
    }

    function remPizza(event) {
        count -= 1;
        dispatch('remPizza', pizza);
    }

</script>

<style>
    .pizza-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: auto;
    }
    .rotate-10 {
        transform: rotate(-6deg);
    }
</style>

<div class="pizza-item max-w-sm w-full lg:max-w-full flex flex-col items-center justify-center bg-gray-200 w-full rounded-sm p-4" transition:fly="{{ y: 20, duration: 300 }}">
        <!-- pizza image -->
        <div class="pizza-item__image rounded-full h-48 w-48 shadow-md bg-gray-400 overflow-hidden">
            <img class="object-cover h-48 w-full" src={`images/${pizza.image}`} title={pizza.name} alt={pizza.name} />
        </div>
        <div class="pizza-item__name text-2xl bg-yellow-500 px-4 shadow-md font-bold text-center -m-2 z-10 rotate-10">{pizza.name}</div>
        {#if count}
            {#if allowOneOnly}
                <button
                    class:opacity-50={count}
                    class:cursor-not-allowed={count}
                    class="mt-8 rounded-full px-4 py-3 bg-teal-600 text-white border-teal-500 hover:border-transparent font-semibold leading-tight shadow-md"
                >
                    added
                </button>
            {:else}
                <div class="inline-flex mt-8">
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
                class="mt-8 rounded-full px-4 py-3 bg-transparent hover:bg-teal-600 hover:text-white border-teal-500 hover:border-transparent font-semibold leading-tight shadow-md"
                on:click={addPizza}
            >
            <Icon data={plus}></Icon> add to bag
            </button>
        {/if}
        <p class="py-4 text-gray-600 text-center">{pizza.description.length > 60 ? pizza.description.substr(0, 60) + '...' : pizza.description}</p>

</div>