<script>
    import PageLayout from '../components/PageLayout.svelte';
    import PizzaItems from '../components/PizzaItems.svelte';
    import { drinks } from '../libs/pizza';
</script>

<PageLayout>
    <PizzaItems items={drinks} />
</PageLayout>