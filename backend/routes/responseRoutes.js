import express from 'express';
import {
  createResponse,
  getAllResponses,
  getResponsesByForm,
  getResponseById,
  updateResponse,
  deleteResponse,
} from '../controllers/responseController.js';
import { protectUserRoutes } from "../middlewares/protectUserRoutes.js";

const router = express.Router();

// Routes

// Create a new response (protected route)
router.post('/responses', protectUserRoutes, createResponse);

// Get all responses (protected route)
router.get('/responses', protectUserRoutes, getAllResponses);

// Get responses by form ID (protected route)
router.get('/responses/form/:formId', protectUserRoutes, getResponsesByForm);

// Get a single response by ID (protected route)
router.get('/responses/:id', protectUserRoutes, getResponseById);

// Update a response by ID (protected route)
router.put('/responses/:id', protectUserRoutes, updateResponse);

// Delete a response by ID (protected route)
router.delete('/responses/:id', protectUserRoutes, deleteResponse);

export default router;
