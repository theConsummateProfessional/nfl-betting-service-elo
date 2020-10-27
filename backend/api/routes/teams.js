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
router.get('/:mascot/:year', getTeamByMascotAndYear, (req, res) => {
    res.send(res.team);
})

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
    
})

//pushing new opponent for existing team
router.patch('/:mascot/:year', async (req, res) =>{
    if(!req.body.opponents_with_outcome  != null){
        let team = await Team.findOneAndUpdate(
            {mascot: req.params.mascot, year: req.params.year},
            {$addToSet : {opponents_with_outcome: req.body.opponents_with_outcome}},
            (err) => {
                if(err){
                    res.status(400).json({ message: err.message});
                }
                else{
                    res.status(201).json({message: 'Update successful'});
                }
            });
    }
});

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

module.exports = router;