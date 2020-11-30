const mongoose = require('mongoose');

const game_schema = new mongoose.Schema({
    year: {
        type: Number,
        required: true
    },
    week: {
        type: Number,
        required: true
    },
    games: [
        {
            timestamp: {
                type: String,
                required: true
            },
            home_team_city: {
                type: String,
                required: true
            },
            home_team_mascot: {
                type: String,
                required: true
            },
            away_team_city: {
                type: String,
                required: true
            },
            away_team_mascot: {
                type: String,
                required: true
            },
            home_team_score: {
                type: Number,
                required: true
            },
            away_team_score: {
                type: Number,
                required: true
            },
            home_team_yards: {
                type: Number, 
                required: true
            },
            away_team_yards: {
                type: Number,
                required: true
            },
            home_team_turnovers: {
                type: Number,
                required: true
            },
            away_team_turnovers: {
                type: Number,
                required: true
            },
            home_team_time_of_possession: {
                type: Number,
                required: true
            },
            away_team_time_of_possession: {
                type: Number,
                required: true
            },
            home_team_sacks: {
                type: Number,
                required: true
            },
            away_team_sacks: {
                type: Number,
                required: true
            },
            home_team_penalties: {
                type: Number,
                required: true
            },
            away_team_penalties: {
                type: Number,
                required: true
            },
            home_team_penalty_yards: {
                type: Number,
                required: true
            },
            away_team_penalty_yards: {
                type: Number,
                required: true
            },
            home_team_rush_attempts: {
                type: Number,
                required: true
            },
            away_team_rush_attempts: {
                type: Number,
                required: true
            },
            home_team_rush_yards: {
                type: Number,
                required: true
            },
            away_team_rush_yards: {
                type: Number,
                required: true
            },
            home_team_rush_touchdowns: {
                type: Number,
                required: true
            },
            away_team_rush_touchdowns: {
                type: Number,
                required: true
            },
            home_team_completions: {
                type: Number,
                required: true
            },
            away_team_completions: {
                type: Number,
                required: true
            },
            home_team_pass_attempts: {
                type: Number,
                required: true
            },
            away_team_pass_attempts: {
                type: Number,
                required: true
            },
            home_team_pass_yards: {
                type: Number,
                required: true
            },
            away_team_pass_yards: {
                type: Number,
                required: true
            },
            home_team_pass_touchdowns: {
                type: Number,
                required: true
            },
            away_team_pass_touchdowns: {
                type: Number,
                required: true
            },
            home_team_first_downs: {
                type: Number,
                required: true
            },
            away_team_first_downs: {
                type: Number,
                required: true
            },
            home_team_third_down_percentage: {
                type: Number,
                required: true
            },
            away_team_third_down_percentage: {
                type: Number,
                required: true
            },
            over_under: {
                type: Number,
                required: true
            },
            betting_line: {
                betting_number:{
                    type: Number,
                    required: true
                },
                favored_team: {
                    type: String,
                    required: true
                }
            }
        }
    ]
});

module.exports = mongoose.model('Game', game_schema);