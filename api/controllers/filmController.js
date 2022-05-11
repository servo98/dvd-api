import connection from '../utils/database.js';

const getFilms = async (req, res) => {
  const { pageNumber, itemsPerPage } = req.body;

  try {
    const offset = itemsPerPage * pageNumber;

    const result = await connection('film').limit(itemsPerPage).offset(offset);
    const count = (await connection('film').count('film_id as total'))[0].total;

    return res.json({
      data: result,
      totalPages: count / itemsPerPage,
    });
  } catch (error) {
    console.error('Error al consultar a BD', error);
    return res.status(500).json({
      msg: 'Error al consultar db',
    });
  }
};

export default {
  getFilms,
};
