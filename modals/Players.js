const { DataTypes } = require('sequelize');
const db = require('../utils/DbConnection');
const Team = require('./teams');

const Player = db.define('Player', {
  player_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  player_team: {
    type: DataTypes.STRING,
    allowNull: false,
  },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {  // is foreign key for another table
          model: Team,
          key: 'team_id'
      }
    },
  player_country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  player_age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  player_rank: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  player_join_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  player_role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  player_rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  player_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoincrement: true,
  },
}, {
  tableName: 'players',
  timestamps: false,
});

// Player.sync({force: true })
//   .then(() => {
//     console.log('Table schema has been updated successfully.');
//   })
//   .catch((error) => {
//     console.error('Error occurred while updating table schema:', error);
//   });

module.exports = Player;
