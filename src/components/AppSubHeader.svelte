<script>
    import NavLink from "./NavLink.svelte";
    import { sticky } from '../actions/sticky';
</script>

<style>
    :global(a.active) {
        color: green;
        font-weight: bold;
    }
</style>
<div use:sticky class="z-20 top-0 bg-white w-full max-w-screen-xl relative mx-auto pt-2 pb-2 lg:border-b-2 lg:border-gray-200 sticky">
    <div class="xl:flex -mx-6 relative">
        <div class="px-6 text-left md:text-center xl:text-left max-w-2xl md:max-w-3xl mx-auto">
              <nav>
                 <ul class="flex">
                    <li class="flex-1 mr-2 text-center">
                        <NavLink to="/cart" class="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">
                            Shopping Cart
                        </NavLink>
                    </li>
                    <li class="flex-1 mr-2 text-center">
                        <NavLink to="drinks" class="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4">
                            Check Out
                        </NavLink>
                    </li>
                    <li class="flex-1 mr-2 text-center">
                        <NavLink to="salads" class="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4">
                            Order Complete
                        </NavLink>
                    </li>
                </ul>
              </nav>
        </div>
    </div>
</div>