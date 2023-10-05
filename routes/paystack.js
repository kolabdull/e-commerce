const router = require("exress").Router();
const Paystack = require("paystack")("process.env.PAYSTACK_KEY");

router.post("/payment", (req, res) => {});

module.exports = router;
