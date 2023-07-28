const { DataTypes } = require('sequelize');
const db = require('../utils/DbConnection');
const Player = require('./players');

const PlayerStats = db.define('PlayerStats', {
  stats_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  total_kills: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  headshot_percentage: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total_ace: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bombs_planted: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bombs_defused: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  kill_death_ratio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  major_won: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  player_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
        model: Player,
        key: 'player_id'
    }
  },
  matches_played: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'player_stats',
});

module.exports = PlayerStats;
