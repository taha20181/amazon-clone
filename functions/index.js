const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HVKflClVErs1Bh3A9XDKSPKDMhmQWjdlx9Xf0UI0diRIDCMe14I8ERxK4NIDUoL9dYdIiw03bDuOqbT9kg5WkGi00fBtx7Kjf");


const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get('/', (req, res) => res.status(200).send("Hello World!"));

app.post('/payments/create', async(request, response) => {
    const total = request.query.total;

    console.log("Payment received", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app)