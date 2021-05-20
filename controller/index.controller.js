"use strict";

const homePage = async (req, res) => {
  await res.send("wlc to book api");
};

module.exports = {
  homePage: homePage,
};
