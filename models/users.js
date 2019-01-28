const bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    // email: {
    //   type: DataTypes.STRING,
    //   unique: true,
    //   validate: {
    //     isEmail: true
    //   }
    // },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER
    },
    phone: {
      type: DataTypes.INTEGER
    }
  });

  User.prototype.validPassword = function(password) {
    //logger.log("password attempt");
    return bcrypt.compareSync(password, this.password);
  };

  User.addHook("beforeCreate", function(user) {
    console.log("password before create hook", user.name);
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};
