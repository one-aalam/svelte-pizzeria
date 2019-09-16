<script>
    import PageLayout from '../components/PageLayout.svelte';
    import PizzaItems from '../components/PizzaItems.svelte';
    import { salads } from '../libs/pizza';
</script>

<PageLayout>
    <PizzaItems items={salads} />
</PageLayout>