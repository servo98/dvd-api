import express from 'express';
import filmRoutes from './routes/filmRoutes.js';

const api = express();

/**
 * Para poder acceder a req.body
 */
api.use(express.json());

//USE ROUTES
api.use(filmRoutes);

api.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error(err);
    return res.status(400).json({
      msg: 'Bad Json body',
    });
  }
  return res.json({
    msg: 'Error',
  });
});

export default api;
