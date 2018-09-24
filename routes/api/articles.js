const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router
  .route("/")
  .get(articlesController.findAll)

router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

module.exports = router;
