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
router.get('/:id', getTeamById, (req, res) => {
    res.send(res.team);
});

//Getting by mascot and year
router.get('/:mascot/:year/:week', getTeamByMascotYearAndWeek, (req, res) => {
    res.send(res.team);
})

//Creating one
router.post('/', async(req, res) => {
    const team = new Team({
        city: req.body.city,
        mascot: req.body.mascot,
        year: req.body.year,
        week: req.body.week,
        yards_gained: req.body.yards_gained,
        yards_allowed: req.body.yards_allowed,
        points_allowed: req.body.points_allowed,
        points_scored: req.body.points_scored,
        num_turnovers_commited: req.body.num_turnovers_commited,
        turnovers_recieved: req.body.turnovers_recieved,
        passing_offense_yards: req.body.passing_offense_yards,
        rushing_offense_yards: req.body.rushing_offense_yards,
        completions: req.body.completions,
        pass_attempts: req.body.pass_attempts,
        completion_percentage: req.body.completion_percentage,
        rush_attempts: req.body.rush_attempts,
        passing_defense_yards_allowed: req.body.passing_defense_yards_allowed,
        rushing_defense_yards_allowed: req.body.rushing_defense_yards_allowed,
        completions_allowed: req.body.completions_allowed,
        rush_attempts_tried: req.body.rush_attempts_tried,
        pass_attempts_tried: req.body.pass_attempts_tried,
        completion_percentage_allowed: req.body.completion_percentage_allowed,
        num_sacks: req.body.num_sacks,
        elo: req.body.elo,
        num_penalties: req.body.num_penalties,
        penalty_yards: req.body.penalty_yards,
        first_downs_gained: req.body.first_downs_gained,
        first_downs_allowed: req.body.first_downs_allowed,
        average_time_of_possession: req.body.average_time_of_possession,
        average_yards_gained: req.body.average_yards_gained,
        average_yards_allowed: req.body.average_yards_allowed,
        average_points_allowed: req.body.average_points_allowed,
        average_points_scored: req.body.average_points_scored,
        average_turnovers_committed: req.body.average_turnovers_committed,
        average_turnovers_recieved: req.body.average_turnovers_recieved,
        average_sacks: req.body.average_sacks,
        average_penalties: req.body.average_penalties,
        average_penalty_yards: req.body.average_penalty_yards,
        average_rush_attempts: req.body.average_rush_attempts,
        average_rush_attempts_tried: req.body.average_rush_attempts_tried,
        average_rush_yards: req.body.average_rush_yards,
        average_rush_yards_allowed: req.body.average_rush_yards_allowed,
        average_completions: req.body.average_completions,
        average_pass_attempts: req.body.average_pass_attempts,
        average_pass_yards: req.body.average_pass_yards,
        average_pass_attempts_tried: req.body.average_pass_attempts_tried,
        average_pass_yards_allowed: req.body.average_pass_yards_allowed,
        average_first_downs_gained: req.body.average_first_downs_gained,
        average_first_downs_allowed: req.body.average_first_downs_allowed,
        average_third_down_conversion_rate: req.body.average_third_down_conversion_rate,
        average_third_down_conversion_rate_allowed: req.body.average_third_down_conversion_rate_allowed
    });


    try {
        const newTeam = await team.save();
        res.status(201).json(newTeam);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
})

//update one by mascot and year
router.patch('/:id', getTeamById, async(req, res) => {
    if(req.body.city != null){
        res.team.body = req.body.city;
    }
    if(req.body.mascot != null){
        res.team.mascot = req.body.mascot;
    }
    if(req.body.year != null){
        res.team.year = req.body.year;
    }
    if(req.body.yards_gained != null){
        res.team.yards_gained = req.body.yards_gained;
    }
    if(req.body.yards_allowed != null){
        res.team.yards_allowed = req.body.yards_allowed;
    }
    if(req.body.offense_yards_rank != null){
        res.team.offense_yards_rank = req.body.offense_yards_rank;
    }
    if(req.body.defense_yards_rank != null){
        res.team.defense_yards_rank = req.body.defense_yards_rank;
    }
    if(req.body.scoring_offense != null){
        res.team.scoring_offense = req.body.scoring_offense;
    }
    if(req.body.scoring_defense != null){
        res.team.scoring_defense = req.body.scoring_defense;
    }
    if(req.body.points_allowed != null){
        res.team.points_allowed = req.body.points_allowed;
    }
    if(req.body.points_scored != null){
        res.team.points_scored = req.body.points_scored;
    }
    if(req.body.num_turnovers_commited != null){
        res.team.num_turnovers_commited = req.body.num_turnovers_commited;
    }
    if(req.body.turnover_committed_rank != null){
        res.team.turnover_committed_rank = req.body.turnover_committed_rank;
    }
    if(req.body.turnovers_recieved != null){
        res.team.turnovers_recieved = req.body.turnovers_recieved;
    }
    if(req.body.turnovers_recieved_rank != null){
        res.team.turnovers_recieved_rank = req.body.turnovers_recieved_rank;
    }
    if(req.body.passing_offense_yards != null){
        res.team.passing_offense_yards = req.body.passing_offense_yards;
    }
    if(req.body.passing_offense_rank != null){
        res.team.passing_offense_rank = req.body.passing_offense_rank;
    }
    if(req.body.rushing_offense_yards != null){
        res.team.rushing_offense_yards = req.body.rushing_offense_yards;
    }
    if(req.body.rushing_offense_rank != null){
        res.team.rushing_offense_rank = req.body.rushing_offense_rank;
    }
    if(req.body.passing_defense_yards_allowed != null){
        res.team.passing_defense_yards_allowed = req.body.passing_defense_yards_allowed;
    }
    if(req.body.passing_defense_rank != null){
        res.team.passing_defense_rank = req.body.passing_defense_rank;
    }
    if(req.body.rushing_defense_yards_allowed != null){
        res.team.rushing_defense_yards_allowed = req.body.rushing_defense_yards_allowed;
    }
    if(req.body.rushing_defense_rank != null){
        res.team.rushing_defense_rank = req.body.rushing_defense_rank;
    }
    if(req.body.average_time_of_possession.minutes != null){
        res.team.average_time_of_possession.minutes = req.body.average_time_of_possession.minutes;
    }
    if(req.body.average_time_of_possession.seconds != null){
        res.team.average_time_of_possession.seconds = req.body.average_time_of_possession.seconds;
    }
    if(req.body.opponents_with_outcome != null){
        res.team.opponents_with_outcome = req.body.opponents_with_outcome;
    }

    try {
        const newTeam = await res.team.save();
        res.status(201).json(newTeam);
    }
    catch(err) {
        res.status(400).status({ message: err.message });
    }
})

//Deleting one
router.delete('/:id', getTeamById, async (req, res) => {
    try {
        await res.team.remove();
        res.json({ message: 'Deleted Team' });
    }
    catch(err) {
        return res.status(500).json({ message: err.message });
    }
})

async function getTeamById(req, res, next) {
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

async function getTeamByMascotAndYear(req, res, next){
    let team;
    try {
        team = await Team.find({mascot: req.params.mascot, year: req.params.year});
        if(team == null){
            return res.status(400).json({ message: 'Cannot find Team'});
        }
    }
    catch(err){
        return res.status(500).json({message: err.message})
    }

    res.team = team;
    next();
}

async function getTeamByMascotYearAndWeek(req, res, next){
    let team;
    try {
        team = await Team.find({mascot: req.params.mascot, year: req.params.year, week: req.params.week});
        if(team == null){
            return res.status(400).json({ message: 'Cannot find Team'});
        }
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

module.exports = router;