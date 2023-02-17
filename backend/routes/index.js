var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");
const myKey = process.env.OWM_API_KEY;

router.get("/movies", (req, res) => {
	fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${myKey}`)
		.then((response) => response.json())
		.then((data) => {
			res.json({ movieList: data });
		});
});

module.exports = router;
