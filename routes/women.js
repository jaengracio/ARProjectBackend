const router = require('express').Router();

let Women = require('../models/Woman');

router.route('/').get((req, res) => {
  Women.find()
       .then(women => res.json(women))
       .catch(err => res.status(400).json('Error: ', + err));

  //res.json({message: "You are trying to see a list of women."})
});

router.route('/:id').get((req, res) => {
  const womanId = req.params.id;

  //res.json({message: "You are trying to find a woman.", womanId})

  Women.findById(womanId)
       .then(result => {
          if (!result) {
            return res.status(404).json({ message: "Woman with id " + womanId + " not found" });
          }
          res.json(result);
        })
       .catch(err => {
        if (err.kind === 'ObjectId') {
          return res.status(404).json({ message: "Woman with id " + womanId + " not found" });
        }
        return res.status(500).json({ message: "Error retrieving woman with id " + womanId });
        });
});

module.exports = router;
