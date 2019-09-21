require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  'Access-Control-Allow-Methods': '*'
}
// 'Access-Control-Max-Age': '2592000',
// 'Access-Control-Allow-Credentials': 'true'

exports.handler = async (event, context, callback) => {
  // In the case of a CORS preflight check, just return early.
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify( "OK" )
    };
  }
  if (!event.body || event.httpMethod !== "POST") {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: "invalid http method"
      })
    };
  }

  const data = JSON.parse(event.body)
  if (!data.stripeToken || !data.stripeAmt || !data.stripeIdempotency) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: "missing information"
      })
    };
  }

  return await stripe.customers
    .create({
      email: data.stripeEmail,
      source: data.stripeToken
    })
    .then(customer => stripe.charges.create({
        amount: data.stripeAmt,
        currency: 'usd',
        description: 'Example charge',
        // source: data.stripeToken,
        receipt_email: data.stripeEmail,
        customer: customer.id,
      },{
        idempotency_key: data.stripeIdempotency
    }))
    .then(charge => {
      return {
        statusCode: 200,
        body: JSON.stringify(charge)
      }
    })
    .catch(error => {
        const { code, type, statusCode } = error;
        return {
          statusCode: 500,
          headers,
          body: JSON.stringify({
            status: "Purchase failed",
            type
          })
        }
      });
}