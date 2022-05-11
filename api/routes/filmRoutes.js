import expres, { application } from 'express';
import filmController from '../controllers/filmController.js';
import { isPaginated } from '../middleware/isPaginated.js';

const router = expres.Router();

router.get('/films', isPaginated, filmController.getFilms);

export default router;
