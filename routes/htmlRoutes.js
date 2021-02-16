const express = require("express");
const path = require("path");
const router = require("express").Router();

module.exports = function () {
  router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
