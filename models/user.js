
// Creating the model for the user 
// information exporting and returning as user
module.exports = function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        name: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING
    });

    User.associate = function(models) {
        User.hasMany(models.BlogPost, {
          onDelete: "cascade"
        });
      };

    return User;
};