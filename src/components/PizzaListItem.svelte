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

<div class="pizza-item max-w-sm w-full lg:max-w-full flex flex-row bg-gray-200 w-full rounded-sm p-4 px-16" transition:fly="{{ y: 20, duration: 300 }}">
        <!-- pizza image -->
        <div class="pizza-item__image flex-initial rounded-full h-48 w-48 shadow-md bg-gray-400 overflow-hidden">
            <img class="object-cover h-48 w-full" src={`images/${pizza.image}`} title={pizza.name} alt={pizza.name} />
        </div>
        <div class="ml-24 flex flex-col justify-center">
            <div class="pizza-item__name flex-initial flex-1 text-2xl bg-yellow-500 px-4 shadow-md font-bold text-center">{pizza.name}</div>
        </div>
        <div class="ml-24 flex flex-col justify-center"> 
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
                        <!-- <input class="px-4 py-3 w-16" type="text" bind:value={count} /> -->
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
        <div class="price-details ml-24 flex flex-col justify-center">
            <div class="flex-initial flex-1 text-2xl bg-yellow-500 px-4  text-center">${price} x {count}</div>
        </div>
        <div class="price-details ml-24 flex flex-col justify-center">
            <div class="flex-initial flex-1 text-2xl bg-yellow-500 px-4  text-center">${Math.round(price * count, 2)}</div>
        </div>
</div>