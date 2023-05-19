const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const animal = require('./routes/animalRoute');
const app = express();

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));
mongoose.connect('mongodb://127.0.0.1:27017/mydb',
  { useNewUrlParser: true, 
    useUnifiedTopology: true 
  })
  .then(() => console.log('Connected to database'))
  .catch(err => console.error(err));
// const TodoSchema = new mongoose.Schema({
//   title: String,
//   description: String
// });

// const TodoModel = mongoose.model('Todo', TodoSchema);

// app.get('/api/todos', async (req, res) => {
//   console.log("getTodos");
//   const todos = await TodoModel.find();
//   res.send(todos);
// });

// app.post('/api/todos', async (req, res) => {
//   const { title, description } = req.body;
//   const todo = new TodoModel({ title, description });
//   await todo.save();
//   res.send(todo);
// });

// app.put('/api/todos/:id', async (req, res) => {
//   const { id } = req.params;
//   const { title, description } = req.body;
//   const todo = await TodoModel.findByIdAndUpdate(id, { title, description }, { new: true });
//   res.send(todo);
// });

// app.delete('/api/todos/:id', async (req, res) => {
//   const { id } = req.params;
//   await TodoModel.findByIdAndDelete(id);
//   res.send({ message: 'Todo deleted successfully' });
// });
app.use('/api/animal', animal);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}🚀`));