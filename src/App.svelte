<script>
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';

    const cart = writable([]);
    setContext('cart', cart);

    import { Router, Route } from "svelte-routing";
    import AppHeader from './components/AppHeader.svelte';
    import AppFooter from './components/AppFooter.svelte';
    import About from "./pages/About.svelte";
    import Home from "./pages/Home.svelte";
    export let url = "";
</script>


<Router url="{url}">
  <AppHeader />
  <div>
    <Route path="about" component="{About}" />
    <!-- <Route path="pizza/*" component="{Pizza}" /> -->
    <Route path="/" component="{Home}" />
  </div>
</Router>
<AppFooter/>


