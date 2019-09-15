<script>
  import { onMount } from "svelte";
  import { fetch } from '../libs/fetch';
  // export the variable to make a prop
  export let url = "";
  let data = [];
  onMount(async function() {
    const response = await fetch(url);
    const json = await response.json();
    data = json;
  });
</script>
<slot {data} />

    <!-- <Fetch url="https://jsonplaceholder.typicode.com/todos" let:data>
          <h1>A list of todos</h1>
            <ul>
                {#each data as link}
                <li>{link.title}</li>
                {/each}
            </ul>
    </Fetch> -->