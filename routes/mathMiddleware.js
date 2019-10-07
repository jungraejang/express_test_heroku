const express = require("express");
const router = express.Router();

router.get("/add/:num1/:num2", (req, res) => {
  console.log("req params", typeof req.params.num1);
  let num1 = Number(req.params.num1);
  let num2 = Number(req.params.num2);
  res.status(200).json({
    result: num1 + num2
  });
});

router.get("/multiply/:num1/:num2", (req, res) => {
  let num1 = Number(req.params.num1);
  let num2 = Number(req.params.num2);
  res.status(200).json({
    result: num1 * num2
  });
});

router.get("/subtract/:num1/:num2", (req, res) => {
  console.log("req params", typeof req.params.num1);
  let num1 = Number(req.params.num1);
  let num2 = Number(req.params.num2);
  res.status(200).json({
    result: num1 - num2
  });
});

router.get("/divide/:num1/:num2", (req, res) => {
  let num1 = Number(req.params.num1);
  let num2 = Number(req.params.num2);
  res.status(200).json({
    result: num1 / num2
  });
});

module.exports = router;
