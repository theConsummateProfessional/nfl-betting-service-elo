const mongoose = require('mongoose');

const prediction_schema = new mongoose.Schema({
    year: {
        type: Number,
        required: true
    },
    week: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    home_team_name: {
        type: String,
        required: true
    },
    away_team_name: {
        type: String,
        required: true
    },
    probability: {
        home_team_probability: {
            type: Number,
            required: true
        },
        away_team_probability: {
            type: Number,
            required: true
        }
    },
    score: {
        home_team_score: {
            type: Number,
        },
        away_team_score: {
            type: Number,
        }
    },
    spread: {
        point_spread: {
            type: Number,
            required: true
        },
        favored_team: {
            type: String,
            required: true
        }
    }
})

module.exports = mongoose.model('Prediction', prediction_schema);