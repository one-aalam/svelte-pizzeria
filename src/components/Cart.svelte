<script>
    import { getContext, onMount } from 'svelte';
    import { get, derived } from 'svelte/store';
    import { Link } from "svelte-routing";
    import shortid from 'shortid';
    import axios from 'axios';
    import Icon  from 'svelte-awesome/components/Icon.svelte';
    import { shoppingBag } from 'svelte-awesome/icons';

    import { groupBy } from '../libs/utils';
    import { fetch } from '../libs/fetch';
    import PizzaListItem from './PizzaListItem.svelte';


    // Create a Stripe client.
    const stripe = Stripe('pk_test_SjNnPE3k5y6TQegY3ln6vF1F00CS8Y2c0N');
    // Create an instance of Elements.
    const elements = stripe.elements();

    const style = {
        base: {
            color: '#32325d',
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '16px',
            '::placeholder': {
            color: '#aab7c4'
            }
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a'
        }
    };

    // Create an instance of the card Element.
    var card = elements.create('card', {style: style});

    // Add an instance of the card Element into the `card-element` <div>.
    onMount(() => {
        card.mount('#card-element');
        // Handle real-time validation errors from the card Element.
        card.addEventListener('change', function(event) {
        //var displayError = document.getElementById('card-errors');
        if (event.error) {
            // event.error.message;
            // displayError.textContent = event.error.message;
        } else {
            // displayError.textContent = '';
        }
        });

        var form = document.getElementById('payment-form');
        form.addEventListener('submit', function(event) {
        event.preventDefault();

        stripe.createToken(card).then(function(result) {
                if (result.error) {
                // Inform the user if there was an error.
               //  var errorElement = document.getElementById('card-errors');
                // errorElement.textContent = result.error.message;
                } else {
                // Send the token to your server.
                // stripeTokenHandler(result.token);

                    var requestInit = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: {
                            stripeEmail: 'one@somemail.com',
                            stripeAmt: 23,
                            stripeToken: result.token.id,
                            stripeIdempotency: shortid.generate()
                        }
                    };
                    try {
                        axios
                            .post(
                                "https://optimistic-euclid-892bac.netlify.com/.netlify/functions/index",
                                {
                                    stripeEmail: 'one@somemail.com',
                                    stripeAmt: 23,
                                    stripeToken: result.token.id,
                                    stripeIdempotency: shortid.generate()
                                },
                                {
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                }
                            ).then(res => {
                                console.log(res);
                                if (res.status === 200) {
                                    console.log(res)
                                }
                            });
                    } catch(err) {
                        console.log(er)
                    }
                }
            });
        });


        // Submit the form with the token ID.
        function stripeTokenHandler(token) {
            // Insert the token ID into the form so it gets submitted to the server
            // var form = document.getElementById('payment-form');
            // var hiddenInput = document.createElement('input');
            // hiddenInput.setAttribute('type', 'hidden');
            // hiddenInput.setAttribute('name', 'stripeToken');
            // hiddenInput.setAttribute('value', token.id);
            // form.appendChild(hiddenInput);

            // Submit the form
            // form.submit();
        }
    });

    const to = '/'
    const groupById = groupBy('id');

    const cart = getContext('cart')
    const cartItemsByType = groupById(get(cart))

    let currentFilter = 'all';

    function addToCart({ detail }) {
        // cart.update(cart => [...cart, detail]);
        $cart = [...$cart, detail];
    }
    function remFromCart({ detail }) {
        const [ firstItemWithId, ...restOfTheItemWithId ] = $cart.filter(cartItem => cartItem.id === detail.id);
        const itemsOtherThanId = $cart.filter(cartItem => cartItem.id !== detail.id);
        $cart = [...itemsOtherThanId, ...restOfTheItemWithId];
    }

    const pay = () => {
        stripe.createToken(card).then(data => card.log(data))
    }

</script>

<style>
    .pizza-list {
        height: auto;
        min-height: calc(100vh);
    }
</style>

<div class="pizza-list container mx-auto relative">
    <button on:click={pay}>Pay With Stripe!</button>
    {#each Object.entries(cartItemsByType) as [id, [item, ...rest]], index (id)}
        <div class="pizza-item">
            <PizzaListItem pizza={item} count={rest.length + 1} on:addPizza={addToCart} on:remPizza={remFromCart}/>
        </div>
    {:else}
        <div></div>
        <div class="flex flex-col text-center pt-24">
            <h3 class="text-5xl text-green-600 pb-8">Your cart's hungry!</h3>
            <Link to="{to}">
                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Let's add some Pizzas!
                </button>
            </Link>    
        </div>   
    {/each}
    <div>
        <form action="/charge" method="post" id="payment-form">
            <div class="form-row">
                <label for="card-element">Credit or debit card</label>
                <div id="card-element">
                    <!-- A Stripe Element will be inserted here. -->
                </div>
                <!-- Used to display form errors. -->
                <div id="card-errors" role="alert"></div>
            </div>
            <button>Submit Payment</button>
        </form>
    </div>
</div>

