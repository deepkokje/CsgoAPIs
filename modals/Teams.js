const { DataTypes } = require('sequelize');
const db = require('../utils/DbConnection');
const Player = require('./Players');

const Team = db.define('Team', {
  team_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  team_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  team_country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  team_ranking: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      max: {
        args: 20,
        msg: "Must be less than 20"
      },
    }
  },
  team_major_won: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  team_coach: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'teams',
  timestamps: false,
});

module.exports = Team;
