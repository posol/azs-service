/**
 * GET request to /azs
 */
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'All azs were fetched',
  });
});

/**
 * GET request to /azs/:id
 */
router.get('/:id', (req, res, next) => {
  res.status(200).json({
    message: 'azs with id was fetch',
  });
});
