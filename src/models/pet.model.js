module.exports = (sequelize, dataType) => {
  const pet = sequelize.define('pet', {
    petName: {
      type: dataType.STRING,
      trim: true,
    },
    breed: {
      type: dataType.STRING,
      trim: true,
    },
    gender: {
      type: dataType.STRING,
      trim: true,
    },
    age: {
      type: dataType.DATE,
      trim: true,
    },
    healthStatus: {
      type: dataType.ENUM('healthy', 'complicated'),
      defaultValue: 'healthy',
      trim: true,
    },
    adoptionStatus: {
      type: dataType.ENUM('pending', 'adopted'),
      defaultValue: 'pending',
      trim: true,
    },
    picture:{
      type:dataType.STRING,
      trim: true
    }
  });

  return pet;
};
