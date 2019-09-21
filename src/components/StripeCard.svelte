<script>
    import shortid from 'shortid';
    import axios from 'axios';
    import { onMount } from 'svelte';

    const stripe = Stripe('pk_test_SjNnPE3k5y6TQegY3ln6vF1F00CS8Y2c0N');

    export let chargeAmount = 0;

    // const style = {
    //     base: {
    //         color: '#32325d',
    //         fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    //         fontSmoothing: 'antialiased',
    //         fontSize: '16px',
    //         '::placeholder': {
    //             color: '#aab7c4'
    //         }
    //     },
    //     invalid: {
    //         color: '#fa755a',
    //         iconColor: '#fa755a'
    //     }
    // };

    const style = {
        base: {
            color: '#303238',
            fontSize: '16px',
            fontFamily: '"Open Sans", sans-serif',
            fontSmoothing: 'antialiased',
            '::placeholder': {
            color: '#CFD7DF',
            },
        },
        invalid: {
            color: '#e5424d',
            ':focus': {
                color: '#303238',
            },
        },
    };

    const elements = stripe.elements();
    let card = elements.create('card', { style });

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
                    try {
                        axios
                            .post(
                                "https://optimistic-euclid-892bac.netlify.com/.netlify/functions/index",
                                {
                                    stripeEmail: 'one@somemail.com',
                                    stripeAmt: chargeAmount,
                                    stripeToken: result.token.id,
                                    stripeIdempotency: shortid.generate()
                                },
                                {
                                    headers: {
                                        "Content-Type": "application/json"
                                    }
                                }
                            ).then(res => {
                                if (res.status === 200) {
                                    console.log(res)
                                }
                            });
                    } catch(err) {
                        console.log(err)
                    }
                }
            });
        });
    });
</script>

<div>
    <form action="/charge" method="post" id="payment-form">
        <div class="form-row">
            <input type="text" bind:value={chargeAmount}/>
            <label for="card-element">Credit or debit card</label>
            <div id="card-element">
                <!-- A Stripe Element will be inserted here. -->
            </div>
            <!-- Used to display form errors. -->
            <div id="card-errors" role="alert"></div>
        </div>
        <button class="text-2xl inline-block bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 border-teal-700 rounded shadow text-right uppercase">
            Pay <span class="px-2 inline-block text-gray-700 bg-green-400">$141.34</span>
        </button>
    </form>
</div>