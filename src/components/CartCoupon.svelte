<script>
     import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    let couponCode = 'SVELTE'
    let appliedCoupon = ''

    const applyCoupon = () => {
        if (appliedCoupon.toLowerCase() !== couponCode.toLowerCase()) {
            return alert('Provided Coupon Code is not applicable!')
        }
        dispatch('applyCoupon', appliedCoupon);
    }
</script>



<form class="px-4 py-2 pb-8 mb-4">
    <div class="mb-4">
    <label class="block text-gray-700 text-sm mb-2" for="username">
        Use CODE <span class="font-bold">{couponCode}</span> to get 10% discount upto $10
    </label>
    <input bind:value={appliedCoupon} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ccode" type="text" placeholder="code...">
    </div>
    <button on:click|preventDefault={applyCoupon} class="bg-white text-xs uppercase hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded">
        Apply Coupon
    </button>
</form>