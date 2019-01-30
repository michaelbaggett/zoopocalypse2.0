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
      type: DataTypes.BOOLEAN
    },
    bat_completed: {
      type: DataTypes.BOOLEAN
    },
    fox_completed: {
      type: DataTypes.BOOLEAN
    },
    yak_completed: {
      type: DataTypes.BOOLEAN
    },
    owl_completed: {
      type: DataTypes.BOOLEAN
    },
    toad_completed: {
      type: DataTypes.BOOLEAN
    },
    crab_completed: {
      type: DataTypes.BOOLEAN
    },
    lion_completed: {
      type: DataTypes.BOOLEAN
    },
    bear_completed: {
      type: DataTypes.BOOLEAN
    },
    bull_completed: {
      type: DataTypes.BOOLEAN
    },
    panda_completed: {
      type: DataTypes.BOOLEAN
    },
    llama_completed: {
      type: DataTypes.BOOLEAN
    },
    rhino_completed: {
      type: DataTypes.BOOLEAN
    },
    sloth_completed: {
      type: DataTypes.BOOLEAN
    },
    snake_completed: {
      type: DataTypes.BOOLEAN
    },
    monkey_completed: {
      type: DataTypes.BOOLEAN
    },
    jaguar_completed: {
      type: DataTypes.BOOLEAN
    },
    toucan_completed: {
      type: DataTypes.BOOLEAN
    },
    walrus_completed: {
      type: DataTypes.BOOLEAN
    },
    beaver_completed: {
      type: DataTypes.BOOLEAN
    },
    penguin_completed: {
      type: DataTypes.BOOLEAN
    },
    gorilla_completed: {
      type: DataTypes.BOOLEAN
    },
    cheetah_completed: {
      type: DataTypes.BOOLEAN
    },
    giraffe_completed: {
      type: DataTypes.BOOLEAN
    },
    elephant_completed: {
      type: DataTypes.BOOLEAN
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
