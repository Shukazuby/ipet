const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { db } = require('../models');

const adoptPet = async (userId, petId, adoptionBody) => {
  const user = await db.users.findOne({ where: { userId } });
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'user not found');
  }
  const pet = await db.pet.findOne({ where: { id: petId } });
  if (!pet) {
    throw new ApiError(httpStatus.NOT_FOUND, 'pet not found');
  }
  const adopt = await db.adoption.create({
    userId: user.id,
    petId: pet.id,
    ...adoptionBody,
  });

  await pet.update({
    adoptionStatus: 'adopted',
  });
  return adopt;
};


module.exports = {
  adoptPet,
};
