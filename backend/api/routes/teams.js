const express = require('express');
const team = require('../models/team');
const router = express.Router();
const Team = require('../models/team');

//Getting all
router.get('/', async (req, res) => {
    try {
        const teams = await Team.find();
        res.json(teams);
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
});

//Getting one
router.get('/:id', getTeam, (req, res) => {
    res.send(res.team);
});

//Creating one
router.post('/', async(req, res) => {
    const team = new Team({
        city: req.body.city,
        mascot: req.body.mascot,
        year: req.body.year,
        yards_gained: req.body.yards_gained,
        yards_allowed: req.body.yards_allowed,
        offense_yards_rank: req.body.offense_yards_rank,
        defense_yards_rank: req.body.defense_yards_rank,
        scoring_offense: req.body.scoring_offense,
        scoring_defense: req.body.scoring_defense,
        points_allowed: req.body.points_allowed,
        points_scored: req.body.points_scored,
        num_turnovers_commited: req.body.num_turnovers_commited,
        turnover_committed_rank: req.body.turnover_committed_rank,
        turnovers_recieved: req.body.turnovers_recieved,
        turnovers_recieved_rank: req.body.turnovers_recieved_rank,
        passing_offense_yards: req.body.passing_offense_yards,
        passing_offense_rank: req.body.passing_offense_rank,
        rushing_offense_yards: req.body.rushing_offense_yards,
        rushing_offense_rank: req.body.rushing_offense_rank,
        passing_defense_yards_allowed: req.body.passing_defense_yards_allowed,
        passing_defense_rank: req.body.passing_defense_rank,
        rushing_defense_yards_allowed: req.body.rushing_defense_yards_allowed,
        rushing_defense_rank: req.body.rushing_defense_rank,
        average_time_of_possession: {
            minutes: req.body.average_time_of_possession.minutes,
            seconds: req.body.average_time_of_possession.seconds
        },
        opponents_with_outcome: req.body.opponents_with_outcome
    });


    try {
        const newTeam = await team.save();
        res.status(201).json(newTeam);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
})

//update one

//Deleting one
router.delete('/:id', getTeam, async (req, res) => {
    try {
        await res.team.remove();
        res.json({ message: 'Deleted Team' });
    }
    catch(err) {
        return res.status(500).json({ message: err.message });
    }
})

async function getTeam(req, res, next) {
    let team;
    try {
        team = await Team.findById(req.params.id);
        if(team == null) {
            return res.status(400).json({ message: 'Cannot find Team' });
        }
    }
    catch(err) {
        return res.status(500).json({ message: err.message });
    }

    res.team = team;
    next();
}

module.exports = router;