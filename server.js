const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
//import fetch from "unfetch";
//const fetch = require("unfetch");
const fetch = require("node-fetch");

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get("/search", function (req, res) {
  fetch("https://api.duffel.com/air/offer_requests", {
    method: 'POST',
    headers: {
      'Accept-Encoding': 'gzip',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Duffel-Version': 'beta',
      'Authorization': 'Bearer test_M1k7zvUkc2siCJiOa0OGBVV-eMIHCSRCN9ArrZfH4PT'
    },
    body: JSON.stringify({
      "data": {
        "passengers": [
          {
            "type": "adult"
          }
        ],
        "slices": [
          {
            "origin": "DFW",
            "destination": "AUS",
            "departure_date": "2020-10-24"
          }
        ],
        "cabin_class": "economy"
      }
    })
  })
    .then(response => response.json())
    .then(json => res.send(json))
});

app.get("/booking", function (req, res) {
  fetch("https://api.duffel.com/air/orders", {
    method: 'POST',
    headers: {
      'Accept-Encoding': 'gzip',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Duffel-Version': 'beta',
      'Authorization': 'Bearer test_M1k7zvUkc2siCJiOa0OGBVV-eMIHCSRCN9ArrZfH4PT'
    },
    body: JSON.stringify({
      "data": {
        "payments": [
          {
            "currency": "GBP",
            "amount": "39.20",
            "type": "balance"
          }
        ],
        "passengers": [
          {
            "phone_number": "+442080160509",
            "email": "amelia@duffel.com",
            "born_on": "1987-07-24",
            "title": "mrs",
            "gender": "f",
            "family_name": "Earhart",
            "given_name": "Amelia",
            "id": "pas_00009wdxdFlgYcjH1Snu1C"
          }
        ],
        "selected_offers": [
          "off_00009wdxdVmyzZH2i7XAGG"
        ]
      }
    })
  })
    .then(response => response.json())
    .then(json => res.send(json))
});

app.get("/cancel", function (req, res) {
  fetch("https://api.duffel.com/air/order_cancellations", {
    method: 'POST',
    headers: {
      'Accept-Encoding': 'gzip',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Duffel-Version': 'beta',
      'Authorization': 'Bearer test_M1k7zvUkc2siCJiOa0OGBVV-eMIHCSRCN9ArrZfH4PT'
    },
    body: JSON.stringify({
      "data": {
        "order_id": "ord_00009wdyKPcJobGk1L0CwN"
      }
    })
  })
    .then(response => response.json())
    .then(json => res.send(json))
});

app.get("/cancel/confirm", function (req, res) {
  fetch("https://api.duffel.com/air/order_cancellations/ore_00009wdzBgimMsi24KDMeX/actions/confirm", {
    method: 'POST',
    headers: {
      'Accept-Encoding': 'gzip',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Duffel-Version': 'beta',
      'Authorization': 'Bearer test_M1k7zvUkc2siCJiOa0OGBVV-eMIHCSRCN9ArrZfH4PT'
    }
  })
    .then(response => response.json())
    .then(json => res.send(json))
});


app.listen(process.env.PORT || 8080);
