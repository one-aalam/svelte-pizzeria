<script>
    // import { fetch } from './libs/fetch';
    import { Router, Route } from "svelte-routing";
    import NavLink from "./components/NavLink.svelte";
    import About from "./pages/About.svelte";
    import Home from "./pages/Home.svelte";
    // import Fetch from "./components/Fetch.svelte";
    import TodoItems from './components/TodoItems.svelte'; 

    // var payload = {};
    // var requestInit = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(payload)
    // };
    // fetch(url, requestInit)
    // .then(function(response) {
    //     if (!response.ok) {
    //     throw Error(response.statusText);
    //     }
    //     return response.json();
    // })
    // .then(function(json) {
    //     console.log(json);
    // })
    // .catch(function(error) {
    //     console.log(error);
    // });
    export let url = "";
</script>

<Router url="{url}">
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="about">About</NavLink>
  </nav>
  <div>
    <Route path="about" component="{About}" />
    <!-- <Route path="blog/*" component="{Blog}" /> -->
    <Route path="/" component="{Home}" />
  </div>
</Router>

    <!-- <Fetch url="https://jsonplaceholder.typicode.com/todos" let:data>
          <h1>A list of todos</h1>
            <ul>
                {#each data as link}
                <li>{link.title}</li>
                {/each}
            </ul>
    </Fetch> -->

