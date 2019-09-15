<script>
    import PageLayout from '../components/PageLayout.svelte';
    import PizzaItems from '../components/PizzaItems.svelte';
    import { pizzas } from '../libs/pizza';
</script>

<PageLayout>
    <PizzaItems items={pizzas} />
</PageLayout>