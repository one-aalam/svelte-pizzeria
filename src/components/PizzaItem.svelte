<script>
    import Icon  from 'svelte-awesome/components/Icon.svelte';
    // import { add } from 'svelte-awesome/icons';
    import { createEventDispatcher } from 'svelte';
    import { fly } from 'svelte/transition';

    export let pizza = {};
    export let added;
    let count = 0;

    const dispatch = createEventDispatcher();

    function addPizza() {
        count += 1;
        console.log(count);
        dispatch('addPizza', {
            id: id
        });
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
            <button
                class:opacity-50={count}
                class:cursor-not-allowed={count}
                class="mt-8 rounded-full px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-teal-600 text-white border-teal-500 hover:border-transparent  md:text-lg xl:text-base font-semibold leading-tight shadow-md"
            >
            <!-- <Icon data={add} scale="2"></Icon> -->
            added
            </button>
        {:else}
            <button 
                class="mt-8 rounded-full px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3  bg-transparent hover:bg-teal-600 hover:text-white border-teal-500 hover:border-transparent  md:text-lg xl:text-base font-semibold leading-tight shadow-md"
                on:click={addPizza}
            >
            <!-- <Icon data={add} scale="2"></Icon> -->
            add to box
            </button>
        {/if}

</div>