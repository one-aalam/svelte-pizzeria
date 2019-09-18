<script>
    import { onMount } from 'svelte';

    onMount(() => {
        window.scrollTo(0, 0);
    })
</script>

<div class="bg-gray-100 inset-x-0 top-0 border-b-2 border-gray-200 lg:border-b-0 lg:static flex items-center pt-12 pb-12">
    <slot></slot>
</div>