  
// const express = require("express");
// const router = express.Router();
// const axios = require("axios");

// router.get("/search", (req, res, next) => {
//   res.render("search");
// });

// router.post("/search", (req, res, next) => {
//   const character = req.body;
//   const nameCharacter = character.name;
//   axios
//     .get(
//       `https://comicvine.gamespot.com/api/search/?query=${nameCharacter}&api_key=9a20aa0fa095f2c84ac1081729cd51a18c4daa0d&format=json`
//     )
//     .then(responseFromApi => { res.render("search", { tittle: responseFromApi.data.results }) })
//     .catch(err => console.log(err));
// });

// module.exports = router;