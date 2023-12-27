const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { db } = require('../models');

const createCategory = async (createBody) => {
  const category = db.category.create(createBody);
  return category;
};

const getACategory = async (id) => {
  const category = db.category.findOne({ where: { id } });
  return category;
};

// const getAllCategory = async ()=>{
//     const categories = db.category.findAll()
//     if(!categories){
//         throw new ApiError(httpStatus.NOT_FOUND, ' No categories')
//     }
// }

const updateCategory = async (id, updateBody) => {
  const category = db.category.update(updateBody, {
    where:{id}
  });
  return category;
};

const getAllPetByCategory =async (filter,options)=>{
  const category = await db.category.findAll({
    include:{
      model: db.pet
  }})
  if (!category) {
      throw new ApiError(httpStatus.NOT_FOUND, ' Oops,');
    }
    return category;

}

module.exports = {
  createCategory,
  getACategory,
  updateCategory,
  getAllPetByCategory
};
