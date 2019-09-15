<script>
    import PizzaItem from './PizzaItem.svelte';
    export let items = [];

    let currentFilter = 'all';
    let cart = [];
    let nextId = 0;

    function addToCart(event) {
        console.log(event);
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
    .pizza-list {
        width: calc(100vw - 200px);
        height: auto;
        min-height: calc(100vh);
        max-width: 1024px;
        margin-left: 150px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 30px;
        grid-row-gap: 40px;
    }
</style>


<div class="pt-12 pizza-list">
    {#each items as pizza, index (pizza.id)}
        <div class="pizza-item">
            <PizzaItem {pizza} on:addPizza={addToCart}/>
        </div>
    {/each}
</div>

