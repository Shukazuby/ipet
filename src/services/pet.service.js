const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { db } = require('../models');

const addPet = async (petBody) => {
  const pet = await db.pet.create({
    ...petBody,
  });
  return pet;
};

const getPetById = async (id) => {
  const pet = await db.pet.findOne({ where: { id } });
  if (!pet) {
    throw new ApiError(httpStatus.NOT_FOUND, 'pet not found');
  }
  return pet;
};

const getAllPet = async () => {
    const pets = await db.pet.findAll()
    if (!pets) {
        throw new ApiError(httpStatus.NOT_FOUND, ' Oops, no pets');
      }
      return pets;
};

module.exports = {
  addPet,
  getPetById,
  getAllPet,
  getAllPetByCategory,
};
