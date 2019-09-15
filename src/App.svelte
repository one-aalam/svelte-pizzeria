<script>
    import { Router, Route } from "svelte-routing";
    import AppHeader from './components/AppHeader.svelte';
    import NavLink from "./components/NavLink.svelte";
    import About from "./pages/About.svelte";
    import Home from "./pages/Home.svelte";
    export let url = "";
</script>

<Router url="{url}">
  <!-- <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="about">About</NavLink>
  </nav> -->
  <AppHeader />
  <div>
    <Route path="about" component="{About}" />
    <!-- <Route path="pizza/*" component="{Pizza}" /> -->
    <Route path="/" component="{Home}" />
  </div>
</Router>


