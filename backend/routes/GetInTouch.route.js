// GetInTouch.route.js
import express from 'express';
import { submitForm } from '../controllers/GetInTouch.controller.js';

const router = express.Router();

// Route for form submission
router.post('/get-in-touch', submitForm);

export default router;
