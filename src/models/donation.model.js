module.exports = (sequelize, dataType) => {
  const donation = sequelize.define('donation', {
    firstName: {
      type: dataType.STRING,
      allowNull: false,
      trim: true,
    },
    lastName: {
      type: dataType.STRING,
      allowNull: false,
      trim: true,
    },
    address: {
      type: dataType.STRING,
      trim: true,
    },
    phoneNumber: {
      type: dataType.INTEGER,
      trim: true,
    },
    purpose: {
      type: dataType.ENUM('yes', 'no'),
      trim: true,
    },
    aboutPet: {
      type: dataType.ENUM('yes', 'no'),
      trim: true,
    },

  });

  return donation;
};
