const express = require('express');
const router = express.Router();
const Prediction = require('../models/prediction');


//Getting all 
router.get('/', async (req, res) => {
    try {
        const predictions = await Prediction.find();
        res.json(predictions);
    }
    catch(err) {
        res.status(500).json({ message: err.message });
    }
});

//getting by date
router.get('/:week', get_predictions_by_week, (req, res) => {
    res.send(res.prediction);
});

//posting one
router.post('/', async (req, res) => {
    req.body.date = req.body.date.substring(0, req.body.date.length - 2);
    req.body.date = req.body.date + " PM";
    const prediction = new Prediction({
        year: req.body.year,
        week: req.body.week,
        date: new Date(req.body.date),
        home_team_name: req.body.home_team_name,
        away_team_name: req.body.away_team_name,
        probability: {
            home_team_probability: req.body.probability.home_team_probability,
            away_team_probability: req.body.probability.away_team_probability
        },
        score: {
            home_team_score: req.body.score.home_team_score,
            away_team_score: req.body.score.away_team_score
        },
        spread: {
            point_spread: req.body.spread.point_spread,
            favored_team: req.body.spread.favored_team
        }
    });

    try {
        const new_prediction = await prediction.save();
        res.status(201).json(new_prediction);
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.delete('/:id', get_prediction_by_id, async (req, res) => {
    try {
        await res.prediction.remove();
        res.json({ message: 'Deleted Prediciton'});
    }
    catch(err){
        return res.status(500).json({ message: err.message });
    }

})

async function get_predictions_by_week(req, res, next){
    let prediction;
    try{
        prediction = await Prediction.find({week: req.params.week}).sort({date: 1});
        if(prediction == null){
            return res.status(400).json({ message: 'Cannot find Predictions'});
        }
    }
    catch(err){
        res.status(500).json({message: err.message})
    }

    res.prediction = prediction;
    next();
}

async function get_prediction_by_id(req, res, next){
    let prediction;
    try{
        prediction = await Prediction.findById(req.params.id);
        if(prediction == null){
            return res.status(400).json({ message: 'Cannot find Prediction'});
        }
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.prediction = prediction;
    next();
}

module.exports = router;