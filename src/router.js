const express = require("express");

const controller = require("./controllers/clientController");

const router = express.Router();

router.get("/", (req,res) => res.status(200).json({api: "online"}));

router.get("/client", controller.listarClients);

router.get("/client/:id", controller.listarClient);

router.post("/client", controller.criarClient);

router.put("/client/:id", controller.atualizarClient);

router.delete("/client/:id", controller.removeClient);

module.exports = router;