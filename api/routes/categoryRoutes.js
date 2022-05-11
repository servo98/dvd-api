import expres from 'express';
import categoryController from '../controllers/categoryController.js';
import { isPaginated } from '../middleware/isPaginated.js';
import isValid from '../middleware/isValidated.js';
import categorySchema from '../middleware/schemas/categorySchema.js';

const router = expres.Router();

router.get('/categories', isPaginated, categoryController.getCategories);
router.post(
  '/categories',
  isValid(categorySchema),
  categoryController.createcategory
);

export default router;
