module.exports = async (req, res, next) => {
  try {
    const {
      query: { limit, offset }
    } = req;
    req.pagination = {
      limit: limit > 50 || limit <= 0 ? 500 : limit,
      offset: offset <= 0 ? 0 : offset
    };
  } catch (err) {
    next(err);
  }
};
