
const express = require("express");
const router = express.Router();
const db = require("../db");

router.get('/', (req, res) => {
    const results = db.query(`SELECT * FROM companies`);
    return res.json(results.rows)
})

module.exports = router;