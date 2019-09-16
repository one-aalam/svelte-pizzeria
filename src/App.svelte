<script>
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';

    const cart = writable([]);
    setContext('cart', cart);

    import { Router, Route } from "svelte-routing";
    import AppHeader from './components/AppHeader.svelte';
    import AppFooter from './components/AppFooter.svelte';
    import DrinkPage from "./pages/DrinkPage.svelte";
    import SaladPage from "./pages/SaladPage.svelte";
    import PizzaPage from "./pages/PizzaPage.svelte";
    export let url = "";
</script>


<Router url="{url}">
  <AppHeader />
  <div>
    <Route path="drinks" component="{DrinkPage}" />
    <Route path="salads" component="{SaladPage}" />
    <!-- <Route path="pizza/*" component="{Pizza}" /> -->
    <Route path="/" component="{PizzaPage}" />
  </div>
</Router>
<AppFooter/>


