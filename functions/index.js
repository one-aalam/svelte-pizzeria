require("dotenv").config()

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Max-Age': '2592000',
  'Access-Control-Allow-Credentials': 'true'
}

exports.handler = async(event, context) => {
  if (!event.body || event.httpMethod !== "POST") {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: "invalid http method"
      })
    }
  }

  const data = JSON.parse(event.body)

  if (!data.stripeToken || !data.stripeAmt || !data.stripeIdempotency) {
    console.error("Required information is missing.")

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: "missing information"
      })
    }
  }

  stripe.customers
    .create({
      email: data.stripeEmail,
      source: data.stripeToken
    })
    .then(customer => {
      console.log(`Customer created and starting the charges, amt: ${data.stripeAmt}, email: ${data.stripeEmail}`)

      return await stripe.charges.create({
          amount: data.stripeAmt,
          currency: 'usd',
          description: 'Example charge',
          source: data.stripeToken,
          receipt_email: data.stripeEmail,
          customer: customer.id,
        },{ idempotency_key: data.stripeIdempotency });
    });
}