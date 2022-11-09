const { User } = require('../models/user');

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const createdUser = await User.createUser(body);
    res.status(200).send({data: createdUser});
  } catch (err) {
    next(err);
  }
};
module.exports.getAllUsers = async (req, res, next) => {
  try {
    const arrayUsers = await User.findAll();
    res.status(201).send({data: arrayUsers});
  } catch (err) {
    next(err);
  }
};
module.exports.getUser = async (req, res, next) => {
  const {
    params: { id }
  } = req;
  try {
    const returnedUser = await User.findByPK(id);
    res.status(200).send({data: returnedUser});
  } catch (err) {
    next(err);
  }
};
module.exports.updateUser = async (req, res, next) => {
  const {
    body,
    params: { id }
  } = req;

  try {
    const updatedUser = await User.update(body, {
      where: {
        id: id
      }
    });
    res.status(200).send({data: updatedUser});
  } catch (err) {
    next(err);
  }
};
module.exports.deleteUser = async (req, res, next) => {
  const {
    params: { id }
  } = req;
  try {
    const deletedUser = await User.destroy({
      where: {
        id: id
      }
    });
    res.status(200).send({data: deletedUser});
  } catch (err) {
    next(err);
  }
};
