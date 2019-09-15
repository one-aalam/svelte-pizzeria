<script>
    import Icon  from 'svelte-awesome/components/Icon.svelte';
    // import { refresh } from 'svelte-awesome/icons';
    import PizzaItem from './PizzaItem.svelte';
    export let items = [];

    let currentFilter = 'all';
    let cart = [];
    let nextId = 0;

    function addToCart(event) {
        if (event.key === 'Enter') {
            todos = [...cart, {
                id: nextId,
                pizza: ''
            }];
            nextId = nextId + 1;
        }
    }
</script>

<style>
    .container {
        max-width: 800px;
        margin: 10px auto;
    }

    /* .active {
        background: lightseagreen;
    } */
</style>


<div class="container">
    <div class="pt-12">
        {#each items as pizza, index (pizza.id)}
            <div class="pizza-item">
                {pizza.name}
                <!-- <TodoItem {...todo} on:deleteTodo={handleDeleteTodo} on:toggleComplete={handleToggleComplete} /> -->
            </div>
        {/each}
    </div>
    <!-- <Icon data={refresh} scale="3"></Icon> -->
</div>

