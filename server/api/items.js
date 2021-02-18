const express = require("express");
const router = express.Router();
const { meliSearch, meliItemDetail } = require("../resources/Meli/api");

router.get("/", async function(req, res) {
  try {
    const { search } = req.query;
    if (search) {
      const data = await meliSearch(search);
      res.send(data);
    } else {
      throw new Error('Has not search params')
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/:id", async function(req, res) {
  try {
    const { id } = req.params;
    if (id) {
      const data = await meliItemDetail(id);
      res.send(data);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
