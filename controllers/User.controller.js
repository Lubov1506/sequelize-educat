const { User } = require('../models');

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const createdUser = await User.create(body);
    res.status(200).send({data: createdUser});
  } catch (err) {
    next(err);
  }
};
module.exports.getAllUsers = async (req, res, next) => {
  try {
    const {pagination = {}} = req
    const arrayUsers = await User.findAll({
      attributes: {
        exclude: ['password']
      },
      ...pagination
    });
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
    const returnedUser = await User.findByPk(id);
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
    const [rowCount, updatedUser] = await User.update(body, {
      where: {
        id: id
      },
      returning: ['id', 'first_name', 'last_name']
    });

    res.status(200).send({data: updatedUser});
  } catch (err) {
    next(err);
  }
};

module.exports.updateUserInstance = async (req, res, next) => {
    const {
      body,
      userInstance: user
    } = req;
  
    try {

      const updatedUser = await user.update(body);
  
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
