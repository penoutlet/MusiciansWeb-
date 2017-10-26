var sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes){
  return sequelize.define('artist', {
    artist_name: {
      type:DataTypes.STRING,
      allowNull: false
  },
    contact: {
    type:DataTypes.INTEGER,
    allowNull: false
  },
    website: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

      genre: {
      type:DataTypes.STRING,
      allowNull: false
    },
      group_size: {
        type: DataTypes.STRING,
        allowNull: false
      },
      blurb: {
        type:DataTypes.BLOB,
        allowNull: false
      }

  });
}
