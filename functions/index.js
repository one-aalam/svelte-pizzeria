require("dotenv").config()
const querystring = require("querystring");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
  'Access-Control-Allow-Methods': '*'
}
// 'Content-Type': 'application/json',
// 'Access-Control-Max-Age': '2592000',
// 'Access-Control-Allow-Credentials': 'true'

exports.handler = async (event, context, callback) => {
  if (!event.body && event.httpMethod !== "POST") {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: "invalid http method"
      })
    };
  }
  const body = {...event.body }

  console.log('event body', event.body);
  const data = querystring.parse(body)
  if (!data.stripeToken || !data.stripeAmt || !data.stripeIdempotency) {
    console.error("Required information is missing.")

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: "missing information"
      })
    };
  }

  let charge;

  try {
    const customer = stripe.customers.create({ email: data.stripeEmail, source: data.stripeToken })
    charge = await stripe.charges.create(
      {
        amount: data.stripeAmt,
        currency: 'usd',
        description: 'Example charge',
        source: data.stripeToken,
        receipt_email: data.stripeEmail,
        customer: customer.id,
      },
      {
        idempotency_key: data.stripeIdempotency
      }
    );
  } catch (e) {
    let message = e.message;
  
    console.error(message);

    return {
      statusCode: 424,
      headers,
      body: JSON.stringify({
        status: "failed",
        message
      })
    };
  }

  const status = (charge === null || charge.status !== "succeeded") ? "failed" : charge.status;
  return {
    statusCode,
    headers,
    body: JSON.stringify({
      status,
      message: "Charge successfully created!"
    })
  };

  // stripe.customers
  //   .create({
  //     email: data.stripeEmail,
  //     source: data.stripeToken
  //   })
  //   .then(customer => stripe.charges.create({
  //       amount: data.stripeAmt,
  //       currency: 'usd',
  //       description: 'Example charge',
  //       source: data.stripeToken,
  //       receipt_email: data.stripeEmail,
  //       customer: customer.id,
  //     },{
  //       idempotency_key: data.stripeIdempotency
  //   }))
  //   .then(charge => callback(null, {
  //     statusCode: 200,
  //     body: charge
  //   }))
  //   .catch(err => {
  //       console.log("Error:", err);
  //       callback({
  //         statusCode: 500,
  //         headers,
  //         body: JSON.stringify({
  //           status: "Purchase failed"
  //         })
  //       })
  //   });
}