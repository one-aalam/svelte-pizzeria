<script>
    import PageLayout from '../components/PageLayout.svelte';
    import PizzaItems from '../components/PizzaItems.svelte';
    import { pizzas, pizzaSizes } from '../libs/pizza';
</script>

<PageLayout>
    <PizzaItems items={pizzas} sizes={pizzaSizes} />
</PageLayout>