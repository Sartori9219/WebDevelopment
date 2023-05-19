const multer = require('multer')
const catchAsync = require('../middlewares/catchAsync');
const Animal = require('../models/animalModel');

// Get all animals
exports.getAllAnimals = catchAsync(async (req, res, next) => {
  const animals = await Animal.find();
  res.send(animals);
});

// Add new animal
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // choose your own directory here
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage }).single('file');
exports.newAnimal = catchAsync(async (req, res, next) => {
   upload( req, res, async (err) => {
  if (err) {
      return res.status(400).json({ success: false, err });
    }
    const { kind, description } = req.body;
    const image = res.req.file.filename;
    console.log(image);
    animal = new Animal({ kind, description, image });
    await animal.save();
    res.send(animal)
    // return res.status(200).json({ success: true, fileName: res.req.file.filename, filePath: res.req.file.path });    
  });
});

// Update animal
exports.replaceAnimal = catchAsync(async (req, res, next) => {
  const { id } = req.param;
  const { kind, descriptions } = req.body;
  const animal = await Animal.findByIdAndUpdate(
    id, { kind, descriptions }, {new:true}
  );
  res.send(animal);
});

// Delete animal
exports.deleteAnimal = catchAsync(async (req, res, next) => {
  const id  = req.params.animalId;
  console.log(req.params.animalId);
  await Animal.findByIdAndDelete(id);
  res.send({ message: "Delete successfully." })
  });