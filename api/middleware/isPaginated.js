const isPaginated = (req, res, next) => {
  let { pageNumber, itemsPerPage } = req.query;

  if (isNaN(pageNumber) || isNaN(itemsPerPage)) {
    return res.status(400).json({
      msg: 'pageNumber or itemsPerPage missing or not Valid',
      status: 'Error',
    });
  }

  req.body.pageNumber = pageNumber <= 0 ? 1 : pageNumber;
  req.body.itemsPerPage = itemsPerPage <= 0 ? 1 : itemsPerPage;

  return next();
};
export { isPaginated };
