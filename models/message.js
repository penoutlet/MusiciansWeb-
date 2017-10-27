var sequelize = require('sequelize');
module.exports = function(sequelize,DataTypes){
  return sequelize.define('message',{
    artist_name:{
      type:DataTypes.STRING,
      allowNull: false
    },
    email:{
      type:DataTypes.STRING,
      allowNull: false
    },
    phone:{
      type:DataTypes.STRING,
      allowNull: false
    },
    genre:{
      type:DataTypes.STRING,
      allowNull: false
    },
    group_size:{
      type:DataTypes.INTEGER,
      allowNull: false
    },
    message:{
      type:DataTypes.STRING,
      allowNull: false
    }
  })
}
