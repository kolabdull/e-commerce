const router = require("express").Router();

const axios = require("axios");

// This is the second configuration option
router.post("/payments", async (req, res) => {
  console.log(req.body);
  try {
    const paystackResponse = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      { email: req.body.email, amount: req.body.amount * 100 },
      {
        //   method: "post",
        //   url: "https://api.paystack.co/transaction/initialize",
        headers: { Authorization: "Bearer " + process.env.PAYSTACK_KEY },
      }
    );
    res.send(paystackResponse.data);
  } catch (err) {
    console.log(err.response.data);
  }
});

module.exports = router;
