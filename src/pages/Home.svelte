<script>
    import PizzaItems from '../components/PizzaItems.svelte';
    import { pizzas } from '../libs/pizza';
</script>


<div class="fixed z-100 bg-gray-100 inset-x-0 top-0 border-b-2 border-gray-200 lg:border-b-0 lg:static flex items-center">
   <div class="bg-gray-100 pt-24 lg:pt-0">
      <PizzaItems items={pizzas} />
    </div>
</div>