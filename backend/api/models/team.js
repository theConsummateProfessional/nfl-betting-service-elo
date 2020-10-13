const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    mascot: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    yards_gained: {
        type: Number,
        required: true
    },
    yards_allowed: {
        type: Number,
        required: true
    },
    offense_yards_rank: {
        type: Number,
        required: true
    },
    defense_yards_rank: {
        type: Number,
        required: true
    },
    scoring_offense: {
        type: Number,
        required: true
    },
    scoring_defense: {
        type: Number,
        required: true
    },
    points_allowed: {
        type: Number,
        required: true
    },
    points_scored: {
        type: Number,
        required: true
    },
    num_turnovers_commited: {
        type: Number,
        required: true
    },
    turnover_committed_rank: {
        type: Number,
        required: true
    },
    turnovers_recieved: {
        type: Number,
        required: true
    },
    turnovers_recieved_rank: {
        type: Number,
        required: true
    },
    passing_offense_yards: {
        type: Number,
        required: true
    },
    passing_offense_rank: {
        type: Number,
        required: true
    },
    rushing_offense_yards: {
        type: Number,
        required: true
    },
    rushing_offense_rank: {
        type: Number,
        required: true
    },
    passing_defense_yards_allowed: {
        type: Number,
        required: true
    },
    passing_defense_rank: {
        type: Number,
        required: true
    },
    rushing_defense_yards_allowed: {
        type: Number,
        required: true
    },
    rushing_defense_rank: {
        type: Number,
        required: true
    },
    average_time_of_possession: {
        minutes: {
            type: Number,
            required: true
        },
        seconds: {
            type: Number,
            required: true
        }
    },
    opponents_with_outcome: [
            {
                opponent_name: {
                    type: String,
                    required: true
                },
                team_score: {
                    type: Number,
                    required: true
                },
                opponent_score: {
                    type: Number,
                    required: true
                },
                week: {
                    type: Number,
                    required: true
                }
            }
        ]
});

module.exports = mongoose.model('Team', teamSchema);