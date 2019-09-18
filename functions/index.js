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

exports.handler = (event, context, callback) => {
  if (!event.body || event.httpMethod !== "POST") {
    callback({
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: "invalid http method"
      })
    });
  }

  const data = JSON.parse(event.body)

  if (!data.stripeToken || !data.stripeAmt || !data.stripeIdempotency) {
    console.error("Required information is missing.")

    callback({
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: "missing information"
      })
    })
  }

  stripe.customers
    .create({
      email: data.stripeEmail,
      source: data.stripeToken
    })
    .then(customer => stripe.charges.create({
        amount: data.stripeAmt,
        currency: 'usd',
        description: 'Example charge',
        source: data.stripeToken,
        receipt_email: data.stripeEmail,
        customer: customer.id,
      },{
        idempotency_key: data.stripeIdempotency
    }))
    .then(charge => callback(null, {
      statusCode: 200,
      body: charge
    }))
    .catch(err => {
        console.log("Error:", err);
        callback({
          statusCode: 500,
          headers,
          body: JSON.stringify({
            status: "Purchase failed"
          })
        })
    });
}