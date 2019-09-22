<script>
    import shortid from 'shortid';
    import axios from 'axios';
    import { onMount } from 'svelte';

    const stripe = Stripe('pk_test_SjNnPE3k5y6TQegY3ln6vF1F00CS8Y2c0N');

    export let chargeAmount = 0;

            // Try to match bootstrap 4 styling
        var style = {
            base: {
                'lineHeight': '1.35',
                'fontSize': '1.11rem',
                'color': '#495057',
                'fontFamily': 'apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif'
            }
        };

    const elements = stripe.elements();

        // Card number
        // var card = elements.create('cardNumber', {
        //     'placeholder': '',
        //     'style': style
        // });

        // CVC
        // var cvc = elements.create('cardCvc', {
        //     'placeholder': '',
        //     'style': style
        // });

        // Card expiry
        // var exp = elements.create('cardExpiry', {
        //     'placeholder': '',
        //     'style': style
        // });

    


    let card = elements.create('card', { style });

    // Add an instance of the card Element into the `card-element` <div>.
    onMount(() => {
        // card.mount('#card-number');
        // cvc.mount('#card-cvc');
        // exp.mount('#card-exp');
        // 
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

<style>
    .CardField {
        background-color: red;
    }
      /* Padding for Stripe Element containers */
        .stripe-element-container {
            padding-top: .55rem;
            padding-bottom: .50rem;
        }

        /* Blue outline on focus */
        .StripeElement--focus {
            border-color: #80BDFF;
            outline:0;
            box-shadow: 0 0 0 .2rem rgba(0,123,255,.25);
            transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        }

        #card-number.form-control,
        #card-cvc.form-control,
        #card-exp.form-control {
            display:inline-block;
        }

</style>

<div>
    <form action="/charge" method="post" id="payment-form">
        <div class="form-row">
            <label for="card-element">Credit or debit card</label>
            <div id="card-element" style='height: 2.4em; padding-top: .7em;'>
                <!-- A Stripe Element will be inserted here. -->
            </div>
            <div id="card-number" style='height: 2.4em; padding-top: .7em;'>
                <!-- A Stripe Element will be inserted here. -->
            </div>
            <div id="card-cvc" style='height: 2.4em; padding-top: .7em;'>
                <!-- A Stripe Element will be inserted here. -->
            </div>
            <div id="card-exp" style='height: 2.4em; padding-top: .7em;'>
                <!-- A Stripe Element will be inserted here. -->
            </div>
            <!-- Used to display form errors. -->
            <div id="card-errors" role="alert"></div>
        </div>
        <!-- <button class="text-2xl inline-block bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 border-teal-700 rounded shadow text-right uppercase">
            Pay <span class="px-2 inline-block text-gray-700 bg-green-400">$141.34</span>
        </button> -->
    </form>
</div>