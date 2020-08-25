const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const app = require('../app');

dotenv.config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.use(express.static('public'));

app.get('/bookings', async (_, res) => {
  const query = `
  query {
    allBooking {
      _id
      name
      price
      image {
        asset {
          url
        }
      }
    }
  }
`;

  const url = process.env.PROJECT_ID;
  try {
    const { data } = await axios.post(
      url,
      { query },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

    const bookings = data.data.allProduct.map(({ _id, name, price }) => ({
      id: _id,
      name,
      price
    }));
    res.send({ bookings });
  } catch (err) {
    console.log('Failed', { err });
    res.status(500).send({ bookings: [] });
  }
});

app.post('/commitCharge', async (req, res) => {
  const { tokenId, total } = req.body;
  try {
    await stripe.charges.create({
      amount: total,
      source: tokenId,
      currency: 'usd'
    });
    res.send({ success: true, message: 'Successfully purchased camp site' });
  } catch (err) {
    console.log('Failed to commit charge', { err });
    res.status(500).send({ message: 'Charge Failed', success: false });
  }
});
