<script>
    import { setContext } from 'svelte';
    import { cart } from './stores/cart.store';
    setContext('cart', cart);

    import { Router, Route } from "svelte-routing";
    import AppHeader from './components/AppHeader.svelte';
    import AppFooter from './components/AppFooter.svelte';

    import DrinkPage from "./pages/DrinkPage.svelte";
    import SaladPage from "./pages/SaladPage.svelte";
    import PizzaPage from "./pages/PizzaPage.svelte";
    import CartPage from "./pages/CartPage.svelte";
    import CheckoutPage from './pages/CheckoutPage.svelte';

    export let url = "";
    setContext('cart', cart);
</script>


<Router url="{url}">
  <AppHeader />
  <div>
    <Route path="drinks" component="{DrinkPage}" />
    <Route path="salads" component="{SaladPage}" />
    <Route path="cart" component="{CartPage}" />
     <Route path="checkout" component="{CheckoutPage}" />
    <!-- <Route path="pizza/*" component="{Pizza}" /> -->
    <Route path="/" component="{PizzaPage}" />
  </div>
</Router>
<AppFooter/>


