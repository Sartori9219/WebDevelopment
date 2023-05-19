const express = require('express');
const router = express();
const {
  getAllAnimals, 
  newAnimal, 
  replaceAnimal, 
  deleteAnimal 
} = require('../controllers/animalController');

router.route("").get(getAllAnimals);
router.route("").post(newAnimal);
router.route("/:animalId").put(replaceAnimal);
router.route("/:animalId").delete(deleteAnimal);


module.exports = router;