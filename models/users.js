const bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING
    },
    age: {
      type: DataTypes.INTEGER
    },
    ant_completed: {
      type: DataTypes.BOOL
    },
    bat_completed: {
      type: DataTypes.BOOL
    },
    fox_completed: {
      type: DataTypes.BOOL
    },
    yak_completed: {
      type: DataTypes.BOOL
    },
    owl_completed: {
      type: DataTypes.BOOL
    },
    toad_completed: {
      type: DataTypes.BOOL
    },
    crab_completed: {
      type: DataTypes.BOOL
    },
    lion_completed: {
      type: DataTypes.BOOL
    },
    bear_completed: {
      type: DataTypes.BOOL
    },
    bull_completed: {
      type: DataTypes.BOOL
    },
    panda_completed: {
      type: DataTypes.BOOL
    },
    llama_completed: {
      type: DataTypes.BOOL
    },
    rhino_completed: {
      type: DataTypes.BOOL
    },
    sloth_completed: {
      type: DataTypes.BOOL
    },
    snake_completed: {
      type: DataTypes.BOOL
    },
    monkey_completed: {
      type: DataTypes.BOOL
    },
    jaguar_completed: {
      type: DataTypes.BOOL
    },
    toucan_completed: {
      type: DataTypes.BOOL
    },
    walrus_completed: {
      type: DataTypes.BOOL
    },
    beaver_completed: {
      type: DataTypes.BOOL
    },
    penguin_completed: {
      type: DataTypes.BOOL
    },
    gorilla_completed: {
      type: DataTypes.BOOL
    },
    cheetah_completed: {
      type: DataTypes.BOOL
    },
    giraffe_completed: {
      type: DataTypes.BOOL
    },
    elephant_completed: {
      type: DataTypes.BOOL
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
