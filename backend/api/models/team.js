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
    turnovers_recieved: {
        type: Number,
        required: true
    },
    passing_offense_yards: {
        type: Number,
        required: true
    },
    rushing_offense_yards: {
        type: Number,
        required: true
    },
    completions: {
        type: Number,
        required: true
    },
    pass_attempts: {
        type: Number,
        required: true
    },
    completion_percentage: {
        type: Number,
        required: true
    },
    rush_attempts: {
        type: Number,
        required: true
    },
    passing_defense_yards_allowed: {
        type: Number,
        required: true
    },
    rushing_defense_yards_allowed: {
        type: Number,
        required: true
    },
    completions_allowed: {
        type: Number,
        required: true
    },
    rush_attempts_tried: {
        type: Number,
        required: true
    },
    pass_attempts_tried: {
        type: Number,
        required: true
    },
    completion_percentage_allowed: {
        type: Number,
        required: true
    },
    num_sacks: {
        type: Number, 
        required: true
    },
    elo: {
        type: Number,
        required: true
    },
    num_penalties: {
        type: Number,
        required: true
    },
    penalty_yards: {
        type: Number,
        required: true
    },
    first_downs_gained: {
        type: Number,
        required: true
    },
    first_downs_allowed: {
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
    average_yards_gained: {
        type: Number,
        required: true
    },
    average_yards_allowed: {
        type: Number,
        required: true
    },
    average_points_allowed: {
        type: Number,
        required: true
    },
    average_points_scored: {
        type: Number,
        required: true
    },
    average_turnovers_committed: {
        type: Number,
        required: true
    },
    average_turnovers_recieved: {
        type: Number,
        required: true
    },
    average_sacks: {
        type: Number,
        required: true
    },
    average_penalties: {
        type: Number,
        required: true
    },
    average_penalty_yards: {
        type: Number,
        required: true
    },
    average_rush_attempts: {
        type: Number,
        required: true
    },
    average_rush_attempts_tried: {
        type: Number,
        required: true
    },
    average_rush_yards: {
        type: Number,
        required: true
    },
    average_rush_yards_allowed: {
        type: Number,
        required: true
    },
    average_completions: {
        type: Number,
        required: true
    },
    average_pass_attempts: {
        type: Number,
        required: true
    },
    average_pass_yards: {
        type: Number,
        required: true
    },
    average_pass_attempts_tried: {
        type: Number,
        required: true
    },
    average_pass_yards_allowed: {
        type: Number,
        required: true
    },
    average_first_downs_gained: {
        type: Number,
        required: true
    },
    average_first_downs_allowed: {
        type: Number,
        required: true
    },
    average_third_down_conversion_rate: {
        type: Number,
        required: true
    },
    average_third_down_conversion_rate_allowed: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Team', teamSchema);