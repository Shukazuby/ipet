module.exports = (sequelize, dataType) => {
  const category = sequelize.define('category', {
    categoryName: {
      type: dataType.STRING,
      trim: true,
    },
  });

  return category;
};
