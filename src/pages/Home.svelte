<script>
    import PizzaItems from '../components/PizzaItems.svelte';
    import { pizzas } from '../libs/pizza';
</script>


<div class="bg-gray-100 inset-x-0 top-0 border-b-2 border-gray-200 lg:border-b-0 lg:static flex items-center">
      <PizzaItems items={pizzas} />
</div>