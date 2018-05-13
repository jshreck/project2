//creating blogPosts table in database

module.exports = function(sequelize, DataTypes){
    var blogPosts = sequelize.define("blogPosts",{
        author: DataTypes.STRING,
        title: DataTypes.STRING,
        content: DataTypes.TEXT


    });
    return blogPosts;
};