const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



module.exports = app;


// app.get("/", (req,res) => {

//     res.send(tasks)
// })

app.get("/tasks", (req,res) => {

    res.send(tasks)
})

app.get("/tasks/:id", (req,res) => {
    let id = parseInt(req.params.id)
    id--
    res.send(tasks[id])
})

app.post("/tasks", (req,res) => {
    const task = req.body
    console.log(req.body)

    tasks.push(task)
    res.send(tasks)
})

app.put("/tasks/:id", (req,res) => {
    let id = parseInt(req.params.id)
    id--
    tasks[id ] = req.body
    res.send(tasks)
})

app.delete("/tasks/:id", (req,res) => {
    let id = parseInt(req.params.id)
    id--
    // tasks[id] = req.body

    let deleted = tasks.splice(id, 1);
    res.send(tasks)
})








const tasks = [
      {
        "id": 1,
        "title": "Set up environment",
        "description": "Install Node.js, npm, and git",
        "completed": true
      },
      {
        "id": 2,
        "title": "Create a new project",
        "description": "Create a new project using the Express application generator",
        "completed": true
      },
      {
        "id": 3,
        "title": "Install nodemon",
        "description": "Install nodemon as a development dependency",
        "completed": true
      },
      {
        "id": 4,
        "title": "Install Express",
        "description": "Install Express",
        "completed": false
      },
      {
        "id": 5,
        "title": "Install Mongoose",
        "description": "Install Mongoose",
        "completed": false
      },
      {
        "id": 6,
        "title": "Install Morgan",
        "description": "Install Morgan",
        "completed": false
      },
      {
        "id": 7,
        "title": "Install body-parser",
        "description": "Install body-parser",
        "completed": false
      },
      {
        "id": 8,
        "title": "Install cors",
        "description": "Install cors",
        "completed": false
      },
      {
        "id": 9,
        "title": "Install passport",
        "description": "Install passport",
        "completed": false
      },
      {
        "id": 10,
        "title": "Install passport-local",
        "description": "Install passport-local",
        "completed": false
      },
      {
        "id": 11,
        "title": "Install passport-local-mongoose",
        "description": "Install passport-local-mongoose",
        "completed": false
      },
      {
        "id": 12,
        "title": "Install express-session",
        "description": "Install express-session",
        "completed": false
      },
      {
        "id": 13,
        "title": "Install connect-mongo",
        "description": "Install connect-mongo",
        "completed": false
      },
      {
        "id": 14,
        "title": "Install dotenv",
        "description": "Install dotenv",
        "completed": false
      },
      {
        "id": 15,
        "title": "Install jsonwebtoken",
        "description": "Install jsonwebtoken",
        "completed": false
      }
    ]
  
  