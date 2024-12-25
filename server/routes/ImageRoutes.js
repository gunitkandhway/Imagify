import express from 'express';
import {generateImage} from '../controllers/ImageController.js';
import userAuth from '../middlewares/Auth.js';

const imageRouter = express.Router();

imageRouter.post('/generate', userAuth, generateImage);

export default imageRouter;