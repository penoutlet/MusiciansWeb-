var sequelize = require('sequelize');
module.exports = function(sequelize,DataTypes){
  return sequelize.define('gig', {
    venue_name:{
      type: DataTypes.STRING,
      allowNull: false
    },

    contact:{
      type:DataTypes.STRING,
      allowNull: false
    },
    website:{
      type:DataTypes.STRING,
      allowNull: false
    },
     duration: {
       type: DataTypes.STRING,
       allowNull: false
     },
     blurb: {
       type: DataTypes.STRING,
       allowNull: false
     }

  });

}
