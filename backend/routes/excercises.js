const router = require('express').Router();
const Excercise = require('../models/excercise.model');

router.route('/').get((req, res) => {
  Excercise.find()
    .then((users) => res.json(users))
    .catch((err) => res.json('Error of: ' + err));
});

router.route('/add').post((req, res) => {
  const user = req.body.user;
  const activity = req.body.activity;
  const duration = Number(req.body.duration);

  const newExcercise = new Excercise({
    user,
    activity,
    duration
  });

  newExcercise
    .save()
    .then(() => res.json('new excercise added'))
    .catch((err) => res.status(400).json('Error of ' + err));
});

router.route('/:id').get((req, res) => {
  Excercise.findById(req.params.id)
    .then((excercise) => res.json(excercise))
    .catch((err) => res.status(400).json('Error of: ' + err));
});

router.route('/:id').delete((req, res) => {
  Excercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Item deleted'))
    .catch((err) => res.status(400).json('Error of: ' + err));
});

router.route('update/:id').post((req, res) => {
  Excercise.findById(req.params.id)
    .then(excercise => {
      excercise.user = req.body.user;
      excercise.activity = req.body.activity;
      excercise.duration = req.body.duration;
      excercise.user = 'Changed to test'

      excercise
        .save()
        .then(() => res.json('Excercise updated'))
        .catch((err) => res.json('Error of ' + err));
    })
    .catch((err) => res.status(400).json('Error of: ' + err));
});

module.exports = router;
