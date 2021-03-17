const express = require("express");
const router = express.Router();
const messagesController = require("./../../../controllers/api/v1/messages");

router.get("/", messagesController.getAll);

router.get("/:id", messagesController.getOne);

router.post("/", messagesController.create);

router.put("/:id", messagesController.updateOne);

router.delete("/:id", messagesController.deleteOne);

module.exports = router;
