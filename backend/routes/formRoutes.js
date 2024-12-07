import express from "express";

import {
  createForm,
  getAllForms,
  getFormsByUser,
  getFormById,
  updateForm,
  deleteForm,
  toggleFormPublish,
} from "../controllers/formController.js";

const router = express.Router();

router.post("/", createForm);
router.get("/", getAllForms);
router.get("/user/:userId", getFormsByUser);
router.get("/:id", getFormById);
router.put("/:id", updateForm);
router.delete("/:id", deleteForm);
router.patch("/:id/togglePublish", toggleFormPublish);

export default router;
