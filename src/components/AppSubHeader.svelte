<script>
    import NavLink from "./NavLink.svelte";
</script>

<style>
    :global(a.active) {
        color: green;
        font-weight: bold;
    }
</style>
<div class="top-0 bg-white border-t-2 border-b-2 w-full max-w-screen-xl relative mx-auto pt-2 pb-2 lg:border-b-2 lg:border-gray-200">
    <div class="xl:flex -mx-6 relative">
        <div class="px-6 text-left md:text-center xl:text-left max-w-2xl md:max-w-3xl mx-auto">
              <nav>
                 <ul class="flex">
                    <li class="flex-1 mr-2 text-center uppercase text-xs text-gray-500">
                        <NavLink to="/cart">
                            Shopping Cart
                        </NavLink>
                    </li>
                    <li class="flex-1 mr-2 text-center text-xs text-gray-400">&rarr;</li>
                    <li class="flex-1 mr-2 text-center uppercase text-xs text-gray-500">
                        <NavLink to="drinks">
                            Check Out
                        </NavLink>
                    </li>
                    <li class="flex-1 mr-2 text-center text-xs text-gray-400">&rarr;</li>
                    <li class="flex-1 mr-2 text-center uppercase text-xs text-gray-500">
                        <NavLink to="salads">
                            Order Complete
                        </NavLink>
                    </li>
                </ul>
              </nav>
        </div>
    </div>
</div>