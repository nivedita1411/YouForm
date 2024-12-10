import express from "express";
import { protectUserRoutes } from "../middlewares/protectUserRoutes.js";
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

router.post("/", protectUserRoutes, createForm); //working
router.get("/", protectUserRoutes, getAllForms); //working
router.get("/user/:userId", protectUserRoutes, getFormsByUser); //working
router.get("/:id", protectUserRoutes, getFormById); //working
router.put("/:id", protectUserRoutes, updateForm); 
router.delete("/:id", protectUserRoutes, deleteForm); //working
router.patch("/:id/togglePublish", protectUserRoutes, toggleFormPublish); //working

export default router;
