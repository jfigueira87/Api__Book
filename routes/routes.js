import express from 'express'
import { getAllBooks } from '../controllers/bookController.js';

const bookRouter = express.Router();

bookRouter.get('/', getAllBooks);

export default bookRouter;