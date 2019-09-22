<script>
    import AppSubHeader from '../components/AppSubHeader.svelte';
    import StripeCard from './StripeCard.svelte';

</script>

<style>
    .pizza-list {
        height: auto;
        min-height: calc(100vh);
    }
</style>

<div class="pizza-list container mx-auto relative">
    <AppSubHeader/>
    <StripeCard/>
</div>