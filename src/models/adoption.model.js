module.exports = (sequelize, dataType) => {
  const adoption = sequelize.define('adoption', {
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
    homeVisit: {
      type: dataType.ENUM('yes', 'no'),
      trim: true,
    },
    amountPaid: {
      type: dataType.STRING,
      trim: true,
    },
    status: {
      type: dataType.ENUM('pending', 'approved'),
      defaultValue: 'pending',
      trim: true,
    },
  });

  return adoption;
};
