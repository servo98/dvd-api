import expres from 'express';
import filmController from '../controllers/filmController.js';
import { isPaginated } from '../middleware/isPaginated.js';
import isValid from '../middleware/isValidated.js';
import filmSchema from '../middleware/schemas/filmSchema.js';

const router = expres.Router();

router.get('/films', isPaginated, filmController.getFilms);
router.post('/films', isValid(filmSchema), filmController.createFilm);

export default router;
