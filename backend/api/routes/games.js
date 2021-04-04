const express = require('express');
const Game = require('../models/game');
const router = express.Router();

//Getting all
router.get('/', async(req, res) => {
    try {
        const games = await Game.find();
        res.json(games);
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
});

//Getting one
router.get('/:id', get_game_by_id, (req, res) => {
    res.send(res.game); //comment example
});

//Getting one by year and week
router.get('/:week/:year', get_games_by_year_and_week, (req, res) => {
    res.send(res.game);
})

//Creating one
router.post('/', async(req, res) => {
    const game = new Game({
        year: req.body.year,
        week: req.body.week,
        games: req.body.games
    });

    try {
        const new_games = await game.save();
        res.status(201).json(new_games);
    }
    catch(err){
        res.status(400).json({ message: err.message });
    }
});

//pushing new games for existing game week
router.patch('/:week/:year', async (req, res) => {
    if(!req.body.games != null){
        let game = await Game.findOneAndUpdate(
            {week: req.params.week, year: req.params.year},
            {$addToSet: {games: req.body.games}},
            (err) => {
                if(err){
                    res.status(400).json({ message: err.message });
                }
                else{
                    res.status(201).json({ message: 'Update Successful' });
                }
            }
        )
    }
});

router.delete('/:week/:year', get_games_by_year_and_week, async (req, res) => {
    try {
        await res.game[0].remove();
        res.json({ message: 'Deleted Week of Games' });
    }
    catch(err) {
        return res.status(500).json({ message: err.message });
    }
})

async function get_games_by_year_and_week(req, res, next) {
    let game;
    try {
        game = await Game.find({week: req.params.week, year: req.params.year});
        if(game == null){
            return res.status(400).json({ message: 'Cannot find Games'});
        }
    }
    catch(err){
        return res.status(500).json({message: err.message});
    }

    res.game = game;
    next();
}

async function get_game_by_id(req, res, next) {
    let game;
    try {
        game = await Game.findById(req.params.id);
        if(team == null){
            return res.status(400).json({ message: 'Cannot find Game' });
        }
    }
    catch(err) {
        return res.status(500).json({ message: err.message });
    }

    res.game = game;
    next();
}

module.exports = router;