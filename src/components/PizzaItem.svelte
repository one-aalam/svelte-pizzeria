<script>
    import { createEventDispatcher } from 'svelte';
    import { fly } from 'svelte/transition';

    export let id;
    export let title;
    export let completed;

    const dispatch = createEventDispatcher();

    function deleteTodo() {
        dispatch('deleteTodo', {
            id: id
        });
    }

    function toggleComplete() {
        dispatch('toggleComplete', {
            id: id
        });
    }
</script>

<style>
</style>


<div class="pizza-item max-w-sm w-full lg:max-w-full lg:flex bg-white px-3 py-1 shadow-md rounded">
    <div class="todo-item-left" transition:fly="{{ y: 20, duration: 300 }}">
        <input type="checkbox" bind:checked={completed} on:change={toggleComplete}>
        <div class="todo-item-label" class:completed={completed}>{title}</div>
    </div>
    <div class="remove-item" on:click={deleteTodo}>
        ×
    </div>
</div>